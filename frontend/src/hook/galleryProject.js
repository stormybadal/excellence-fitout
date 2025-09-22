import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import {
    fetchAllGalleryImages,
    fetchGalleryImageById,
} from "../api/gallery.api";

// Hook for fetching all gallery images with pagination
export const useGallery = (params = {}) => {
    return useQuery({
        queryKey: ["gallery", params],
        queryFn: () => fetchAllGalleryImages(params),
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
};

// Hook for infinite scroll gallery
export const useInfiniteGallery = (params = {}) => {
    return useInfiniteQuery({
        queryKey: ["gallery-infinite", params],
        queryFn: ({ pageParam = 1 }) =>
            fetchAllGalleryImages({ ...params, page: pageParam }),
        getNextPageParam: (lastPage) => {
            const { page, pages } = lastPage.data;
            return page < pages ? page + 1 : undefined;
        },
        initialPageParam: 1,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
};

// Hook for fetching a single gallery image by ID
export const useGalleryImage = (id) => {
    // console.log("fetch gallery image by id in gallery hook-", id);
    return useQuery({
        queryKey: ["gallery-image", id],
        queryFn: () => fetchGalleryImageById(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
};
