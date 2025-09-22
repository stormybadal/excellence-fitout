import { useState } from "react";
import Button from "../components/ui/Button";
import { useInfiniteProjects } from "../hook/useProjects";
import { createProject, updateProject, deleteProject } from "../api/project.api";

export default function ProjectSettings() {
  const [open, setOpen] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [editing, setEditing] = useState(null);

  const [formData, setFormData] = useState({
    projectName: "",
    shortDescription: "",
    location: "",
    duration: "",
    details: "",
    image: null, // single file
    preview: null, // preview for UI
  });

  const [search, setSearch] = useState("");

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteProjects({ limit: 9 });

  // Flatten all pages into a single projects array
  const projects = data?.pages.flatMap((page) => page.data.entries) || [];

  // Handlers
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  const openAddModal = () => {
    setEditing(null);
    setFormData({
      projectName: "",
      shortDescription: "",
      location: "",
      duration: "",
      details: "",
      image: null,
      preview: null,
    });
    setOpen(true);
  };

  const openEditModal = (project) => {
    setEditing(project);
    setFormData({
      ...project,
      image: null,
      preview: project.image, // show existing image as preview
    });
    setOpen(true);
  };

  const handleSubmit = async () => {
    try {
      const fd = new FormData();
      fd.append("projectName", formData.projectName);
      fd.append("shortDescription", formData.shortDescription);
      fd.append("location", formData.location);
      fd.append("duration", formData.duration);
      fd.append("details", formData.details);
      if (formData.image) fd.append("image", formData.image);

      if (editing) await updateProject(editing._id, fd);
      else await createProject(fd);

      setOpen(false);
      setEditing(null);
    } catch (err) {
      console.error(err);
    }
  };

  const confirmDelete = async () => {
    try {
      if (editing?._id) await deleteProject(editing._id);
      setDeleteConfirm(false);
      setEditing(null);
    } catch (err) {
      console.error(err);
    }
  };

  const filteredProjects = projects.filter((p) =>
    p.projectName?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm"
          />
          <Button onClick={openAddModal}>+ Add New Project</Button>
        </div>
      </div>

      {/* Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
          <thead className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-sm uppercase tracking-wide">
            <tr>
              <th className="p-3 text-left">Project Name</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Duration</th>
              <th className="p-3 text-left">Short Description</th>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {filteredProjects.map((proj, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="p-3 font-semibold">{proj.projectName}</td>
                <td className="p-3">{proj.location}</td>
                <td className="p-3">{proj.duration}</td>
                <td className="p-3">{proj.shortDescription}</td>
                <td className="p-3">
                  {proj.image && (
                    <img
                      src={proj.image}
                      alt="project"
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                  )}
                </td>
                <td className="p-3 text-right flex justify-end gap-2">
                  <button
                    onClick={() => openEditModal(proj)}
                    className="px-3 py-1 text-xs font-medium text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setEditing(proj);
                      setDeleteConfirm(true);
                    }}
                    className="px-3 py-1 text-xs font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-4">
        {filteredProjects.map((proj, idx) => (
          <div key={idx} className="rounded-lg border bg-white p-4 shadow-sm">
            <h3 className="font-semibold text-lg">{proj.projectName}</h3>
            <p className="text-sm text-gray-600">{proj.shortDescription}</p>
            <p className="text-sm text-gray-600">
              <strong>Location:</strong> {proj.location}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Duration:</strong> {proj.duration}
            </p>
            {proj.image && (
              <img
                src={proj.image}
                alt="project"
                className="w-full h-40 object-cover rounded-md mt-2"
              />
            )}
            <div className="mt-3 flex gap-3">
              <button
                onClick={() => openEditModal(proj)}
                className="text-blue-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  setEditing(proj);
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

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">
              {editing ? "Edit Project" : "Add New Project"}
            </h3>
            <div className="space-y-3">
              <input
                name="projectName"
                placeholder="Project Name"
                value={formData.projectName}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2 text-sm"
              />
              <input
                name="shortDescription"
                placeholder="Short Description"
                value={formData.shortDescription}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2 text-sm"
              />
              <input
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2 text-sm"
              />
              <input
                name="duration"
                placeholder="Duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2 text-sm"
              />
              <textarea
                name="details"
                placeholder="Project Details"
                value={formData.details}
                onChange={handleChange}
                className="w-full rounded-md border px-4 py-2 text-sm min-h-[100px]"
              />
              <div>
                <input type="file" onChange={handleImageChange} />
                {formData.preview && (
                  <img
                    src={formData.preview}
                    alt="preview"
                    className="mt-2 w-32 h-32 object-cover rounded-md"
                  />
                )}
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

      {/* Delete confirm */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Confirm Delete</h3>
            <p className="text-sm text-gray-600">
              Are you sure you want to delete this project?
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

      {hasNextPage && (
  <div className="flex justify-center mt-4">
    <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
      {isFetchingNextPage ? "Loading..." : "Load More"}
    </Button>
  </div>
)}
    </div>
  );
}
