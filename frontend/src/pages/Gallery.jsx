import { useState } from "react";
import Button from "../components/ui/Button";
import { useInfiniteGallery } from "../hook/galleryProject";
import { createGalleryImage, deleteGalleryImage } from "../api/gallery.api";
import {toast} from 'react-hot-toast';
import { useQueryClient } from "@tanstack/react-query";

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [formData, setFormData] = useState({
    image: null,
    preview: null,
  });

    const queryClient = useQueryClient();
  // Infinite gallery query
const { 
  data, 
  isLoading, 
  fetchNextPage, 
  hasNextPage, 
  isFetchingNextPage 
} = useInfiniteGallery({ limit: 12 });


// Flatten pages correctly
const images = data?.pages.flatMap((page) => page.data.entries) || [];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        image: file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  const openAddModal = () => {
    setFormData({ image: null, preview: null });
    setOpen(true);
  };

  const handleSubmit = async () => {
    try {
      if (!formData.image) return;

      const fd = new FormData();
      fd.append("image", formData.image);

      await createGalleryImage(fd);
      toast.success("Image uploaded successfully!");
      queryClient.invalidateQueries(["gallery"]);

      setOpen(false);
      setFormData({ image: null, preview: null });
    } catch (err) {
      console.error(err);
    }
  };

  const confirmDelete = async () => {
    try {
      if (selectedImage?._id) await deleteGalleryImage(selectedImage._id);
      toast.success("Image deleted successfully!");
      queryClient.invalidateQueries(["gallery"]);
      setDeleteConfirm(false);
      setSelectedImage(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center pt-4 justify-between mb-6">
        <h2 className="text-3xl font-bold">Gallery</h2>
        <Button onClick={openAddModal}>+ Add Image</Button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((imgDoc, idx) => (
          <div key={idx} className="relative group">
            <img
              src={imgDoc.image}
              alt="gallery"
              className="w-full h-40 object-cover rounded-lg shadow"
            />
            {/* Delete overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3 rounded-lg">
              <button
                onClick={() => {
                  setSelectedImage(imgDoc);
                  setDeleteConfirm(true);
                }}
                className="px-3 py-1 text-xs font-medium text-white bg-red-600 rounded-lg shadow hover:bg-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load more */}
      {hasNextPage && (
        <div className="flex justify-center mt-4">
          <Button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}

      {/* Add Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Add New Image</h3>
            <div>
              <input type="file" onChange={handleImageChange} />
              {formData.preview && (
                <img
                  src={formData.preview}
                  alt="preview"
                  className="mt-2 w-full h-40 object-cover rounded-md"
                />
              )}
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSubmit}>Submit</Button>
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
              Are you sure you want to delete this image?
            </p>
            <div className="flex justify-end gap-2 mt-4">
              <Button
                variant="outline"
                onClick={() => setDeleteConfirm(false)}
              >
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
