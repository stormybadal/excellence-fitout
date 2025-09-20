import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../components/ui/Button";
import { MoreHorizontal } from "lucide-react";

export default function Services() {
  const [services, setServices] = useState([]);
  const [open, setOpen] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [editing, setEditing] = useState(null);
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

  // Fetch services
  const fetchServices = async () => {
    const res = await axios.get("http://localhost:8080/api/v1/blog");
    setServices(res.data);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // Handle form change
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFeaturesChange = (e) =>
    setFormData({ ...formData, features: e.target.value.split(",") });

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setFormData({ ...formData, images: urls });
  };

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
  const openEditModal = (service) => {
    setEditing(service);
    setFormData({ ...service });
    setOpen(true);
  };

  // Submit form
  const handleSubmit = async () => {
    try {
      if (editing) {
        await axios.put(`/api/services/${editing._id}`, formData);
      } else {
        await axios.post("/api/services", formData);
      }
      setOpen(false);
      setEditing(null);
      fetchServices();
    } catch (err) {
      console.error(err);
    }
  };

  // Delete
  const confirmDelete = async () => {
    try {
      await axios.delete(`/api/services/${editing._id}`);
      setDeleteConfirm(false);
      setEditing(null);
      fetchServices();
    } catch (err) {
      console.error(err);
    }
  };

  // Derived data
  const categories = ["All", ...new Set(services.map((s) => s.category))];

  const filteredServices = services.filter((s) => {
    const matchesSearch =
      s.heading.toLowerCase().includes(search.toLowerCase()) ||
      s.tagline.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      filterCategory === "All" || s.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
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
                    onClick={() => openEditModal(srv)}
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
                  className="w-16 h-16 rounded-md object-cover"
                />
              ))}
            </div>
            <div className="mt-3 flex gap-3">
              <button
                onClick={() => openEditModal(srv)}
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
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
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
              <input
                name="tagline"
                placeholder="Tagline"
                value={formData.tagline}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
              <input
                name="subheading"
                placeholder="Subheading"
                value={formData.subheading}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-2 text-sm min-h-[80px]"
              />
              <input
                name="features"
                placeholder="Features (comma separated)"
                value={formData.features.join(",")}
                onChange={handleFeaturesChange}
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
              <input
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-2 text-sm"
              />
              <div>
                <input
                  type="file"
                  multiple
                  onChange={handleImageChange}
                  className="w-full text-sm"
                />
                <div className="flex gap-2 mt-2 flex-wrap">
                  {formData.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="preview"
                      className="w-16 h-16 rounded-md object-cover"
                    />
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
