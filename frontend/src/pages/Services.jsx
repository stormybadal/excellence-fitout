import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../components/ui/Button";
import { MoreHorizontal } from "lucide-react";
import { usePortfolio } from "../hook/usePortfolio";
import { createPortfolio, updatePortfolio, deletePortfolio, updateImages } from "../api/portfolio.api";
import { useQueryClient } from "@tanstack/react-query";
import {toast,Toaster} from 'react-hot-toast';

export default function Services() {
  const [open, setOpen] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [newCategory, setNewCategory] = useState("");
  const [formData, setFormData] = useState({
    heading: "",
    tagline: "",
    subheading: "",
    description: "",
    features: [],
    images: [],
    category: "",
  });

    const [search, setSearch] = useState("");
    const [filterCategory, setFilterCategory] = useState("All");
    const [addingNewCategory, setAddingNewCategory] = useState(false);
    const [removedImages, setRemovedImages] = useState([]);

      const queryClient = useQueryClient();

  // ✅ Use React Query hook instead of manual fetch
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePortfolio({ limit: 9 });

  // Flatten paginated data
 const services = data?.pages.flatMap((page) => page.entries) || [];

  // Handle form change
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFeaturesChange = (e) =>
    setFormData({ ...formData, features: e.target.value.split(",") });

// const handleImageChange = (e) => {
//   const files = Array.from(e.target.files);

//   const newImages = files.map((file) => ({
//     file,                   // actual File object for FormData
//     preview: URL.createObjectURL(file), // for showing preview in UI
//   }));

//   setFormData((prev) => ({
//     ...prev,
//     images: [...prev.images, ...newImages],
//   }));
// };



  // Open modal for add
  const openAddModal = () => {
    setEditing(null);
    setFormData({
      heading: "",
      tagline: "",
      subheading: "",
      description: "",
      features: [],
      images: [],
      category: "",
    });
    setOpen(true);
  };

  // Open modal for edit
//   const openEditModal = (service) => {
//     setEditing(service);
//     setFormData({ ...service });
//     setOpen(true);
//   };

  const handleEdit = (service) => {
    setEditing(service);

    setFormData({
        heading: service.heading || "",
        tagline: service.tagline || "",
        subheading: service.subheading || "",
        description: service.description || "",
        category: service.category || "",
        features: service.features || [],
        images: service.images || [], // preload existing image URLs
    });

    setRemovedImages([]); // reset removed
    setOpen(true);
    };


  // Submit form
const handleSubmit = async () => {
  try {
    if (!editing) {
      // Create new portfolio
      const fd = new FormData();
      fd.append("heading", formData.heading);
      fd.append("tagline", formData.tagline);
      fd.append("subheading", formData.subheading);
      fd.append("description", formData.description);
      fd.append("category", formData.category);
      formData.features.forEach((f) => fd.append("features[]", f));
      formData.images.forEach((imgObj) => fd.append("images", imgObj.file));

      await createPortfolio(fd);
      toast.success("Service created successfully!");
    } else {
      // Update portfolio data
      await updatePortfolio(editing._id, {
        heading: formData.heading,
        tagline: formData.tagline,
        subheading: formData.subheading,
        description: formData.description,
        category: formData.category,
        features: formData.features,
      });
      toast.success("Service updated successfully!");

      // Update images if there are new ones or removed images
      const hasNewImages = formData.images.some((img) => img.file);
      if (removedImages.length > 0 || hasNewImages) {
        const fd = new FormData();
        if (removedImages.length > 0) {
          fd.append("removeImages", JSON.stringify(removedImages));
        }
        formData.images.forEach((imgObj) => {
          if (imgObj.file) fd.append("images", imgObj.file);
        });

        await updateImages(editing._id, fd);
        toast.success("Service images updated successfully!");
      }
    }

    // Refresh data after all updates
    queryClient.invalidateQueries(["portfolio"]);

    // Reset state and close modal
    setOpen(false);
    setEditing(null);
    setRemovedImages([]);
  } catch (err) {
    console.error("Submit failed:", err);
    toast.error(
      err?.response?.data?.message || "Something went wrong! Please try again."
    );
  }
};


  // Delete
  const confirmDelete = async () => {
    try {
      if (editing?._id) {
        await deletePortfolio(editing._id);
        toast.success("Service deleted successfully!");
      }
      setDeleteConfirm(false);
      queryClient.invalidateQueries(["portfolio"]);
      setEditing(null);
      fetchServices();
    } catch (err) {
      console.error(err);
    }
  };

  // Derived data
  // Categories
  const categories = ["All", ...new Set(services.map((s) => s.category))];

  // Search + filter
  const filteredServices = services.filter((s) => {
    const matchesSearch =
      s.heading?.toLowerCase().includes(search.toLowerCase()) ||
      s.tagline?.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      filterCategory === "All" || s.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleImageChange = (e) => {
  const files = Array.from(e.target.files);

  const newImages = files.map((file) => ({
    file,
    preview: URL.createObjectURL(file),
  }));

  setFormData((prev) => ({
    ...prev,
    images: [...prev.images, ...newImages],
  }));
};

const handleRemoveImage = (img, index) => {
  if (typeof img === "string") {
    // it's an existing URL → track for removal
    setRemovedImages((prev) => [...prev, img]);
  }

  setFormData((prev) => ({
    ...prev,
    images: prev.images.filter((_, i) => i !== index),
  }));
};


  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex flex-col pt-4 sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h2 className="text-3xl font-bold">Services</h2>
    <div className="flex flex-col sm:flex-row gap-3 mb-4 mt-2">
        <input
          type="text"
          placeholder="Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm"
        />
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="rounded-md border border-gray-300 px-3 py-2 text-sm"
        >
          {categories.map((c, idx) => (
            <option key={idx}>{c}</option>
          ))}
        </select>
                <Button onClick={openAddModal}>+ Add New Service</Button>
      </div>


      </div>

      {/* Filters */}


      {/* Table (desktop) */}
        <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
            <thead className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-sm uppercase tracking-wide">
            <tr>
                <th className="p-3 text-left">Heading</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Tagline</th>
                <th className="p-3 text-left">Features</th>
                <th className="p-3 text-left">Images</th>
                <th className="p-3 text-right">Action</th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
            {filteredServices.map((srv, idx) => (
                <tr
                key={idx}
                className="hover:bg-gray-50 transition-colors duration-200"
                >
                <td className="p-3 font-semibold text-gray-800">{srv.heading}</td>
                <td className="p-3 text-gray-600">{srv.category}</td>
                <td className="p-3 text-gray-600 italic">{srv.tagline}</td>
                <td className="p-3 text-gray-600">
                    {srv.features.join(", ")}
                </td>
                <td className="p-3 flex gap-2">
                    {srv.images.slice(0, 3).map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt="preview"
                        className="w-10 h-10 rounded-lg object-cover border border-gray-200 shadow-sm"
                    />
                    ))}
                </td>
                <td className="p-3 text-right flex justify-end gap-2">
                     <button
                        onClick={() => handleEdit(srv)}
                        className="px-3 py-1 text-xs font-medium text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition"
                    >
                        Edit
                    </button>
                    <button
                    onClick={() => {
                        setEditing(srv);
                        setDeleteConfirm(true);
                    }}
                    className="px-3 py-1 text-xs font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition"
                    >
                    Delete
                    </button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>

      {/* Cards (mobile) */}
      <div className="md:hidden space-y-4">
        {filteredServices.map((srv, idx) => (
          <div
            key={idx}
            className="rounded-lg border bg-white p-4 shadow-sm"
          >
            <h3 className="font-semibold text-lg">{srv.heading}</h3>
            <p className="text-sm text-gray-600">{srv.tagline}</p>
            <p className="text-sm text-gray-600">
              <strong>Category:</strong> {srv.category}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Features:</strong> {srv.features.join(", ")}
            </p>
            <div className="flex gap-2 mt-2 flex-wrap">
              {srv.images.slice(0, 3).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="preview"
                  className="w-20 h-20 rounded-md object-cover"
                />
              ))}
            </div>
            <div className="mt-3 flex gap-3">
                <button
                    onClick={() => handleEdit(srv)}
                    className="text-blue-600 hover:underline"
                >
                    Edit
                </button>
              <button
                onClick={() => {
                  setEditing(srv);
                  setDeleteConfirm(true);
                }}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-auto p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">
              {editing ? "Edit Service" : "Add New Service"}
            </h3>
            <div className="space-y-3">
              <input
                name="heading"
                placeholder="Heading"
                value={formData.heading}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2 text-sm"
              />
              <input
                name="tagline"
                placeholder="Tagline"
                value={formData.tagline}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2 text-sm"
              />
              <input
                name="subheading"
                placeholder="Subheading"
                value={formData.subheading}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2 text-sm"
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2 text-sm min-h-[80px]"
              />
              <div> 
                {formData.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 mb-2">
                    <input
                        type="text"
                        value={feature}
                        onChange={(e) => {
                        const updated = [...formData.features];
                        updated[index] = e.target.value;
                        setFormData({ ...formData, features: updated });
                        }}
                        placeholder={`Feature ${index + 1}`}
                        className="flex-1 rounded-md border px-3 py-2 text-sm"
                    />
                    <button
                        type="button"
                        onClick={() => {
                        const updated = formData.features.filter((_, i) => i !== index);
                        setFormData({ ...formData, features: updated });
                        }}
                        className="px-2 py-1 bg-red-500 text-white rounded-md text-xs"
                    >
                        ✕
                    </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() =>
                    setFormData({ ...formData, features: [...formData.features, ""] })
                    }
                    className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm"
                >
                    + Add Feature
                </button>
                </div>

                {/* Category */}
                <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select
                    value={addingNewCategory ? "new" : formData.category || ""}
                    onChange={(e) => {
                    const value = e.target.value;
                    if (value === "new") {
                        setAddingNewCategory(true);
                        setFormData({ ...formData, category: "" });
                    } else {
                        setAddingNewCategory(false);
                        setNewCategory("");
                        setFormData({ ...formData, category: value });
                    }
                    }}
                    className="w-full rounded-md border px-3 py-2 text-sm"
                >
                    <option value="">Select Category</option>
                    {categories
                    .filter((c) => c !== "All")
                    .map((c, idx) => (
                        <option key={idx} value={c}>
                        {c}
                        </option>
                    ))}
                    <option value="new">+ Add New</option>
                </select>

                {addingNewCategory && (
                    <input
                    type="text"
                    placeholder="Enter new category"
                    value={newCategory}
                    onChange={(e) => {
                        setNewCategory(e.target.value);
                        setFormData({ ...formData, category: e.target.value });
                    }}
                    className="mt-2 w-full rounded-md border px-4 py-2 text-sm"
                    />
                )}
                </div>
              <div>
                <input
                  type="file"
                  multiple
                  onChange={handleImageChange}
                  className="w-full text-sm"
                />
                <div className="flex flex-wrap gap-4">
                    {formData.images.map((img, index) => (
                         <div
                            key={index}
                            className="relative w-32 h-32 border rounded overflow-hidden"
                            >
                            <img
                                src={typeof img === "string" ? img : img.preview}
                                alt="preview"
                                className="object-cover w-full h-full"
                            />
                            <button
                                type="button"
                                className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded"
                                onClick={() => handleRemoveImage(img, index)}
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>

              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSubmit}>
                {editing ? "Update" : "Submit"}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Confirm Delete</h3>
            <p className="text-sm text-gray-600">
              Are you sure you want to delete this service?
            </p>
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setDeleteConfirm(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={confirmDelete}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
