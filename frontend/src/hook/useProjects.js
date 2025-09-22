import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { fetchAllProjects, fetchProjectById } from "../api/project.api";

// Hook for fetching all projects with pagination
export const useProjects = (params = {}) => {
    return useQuery({
        queryKey: ["projects", params],
        queryFn: () => fetchAllProjects(params),
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
};

// Hook for infinite scroll projects
export const useInfiniteProjects = (params = {}) => {
    return useInfiniteQuery({
        queryKey: ["projects-infinite", params],
        queryFn: ({ pageParam = 1 }) => fetchAllProjects({ ...params, page: pageParam }),
        getNextPageParam: (lastPage) => {
            const { page, pages } = lastPage.data;
            return page < pages ? page + 1 : undefined;
        },
        initialPageParam: 1,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
};

// Hook for fetching a single project by ID
export const useProject = (id) => {
    // console.log("fetch project by id in project hook-", id);
    return useQuery({
        queryKey: ["project", id],
        queryFn: () => fetchProjectById(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
};

