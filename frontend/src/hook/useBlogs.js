import { useInfiniteQuery } from "@tanstack/react-query";
import { fetAllBlog } from "../api/blog.api";
import { fetchBlogById } from "../api/blog.api";
import { useQuery } from "@tanstack/react-query";

export const useBlogs = (params = {}) => {
  return useInfiniteQuery({
    queryKey: ["blogs", params],
    queryFn: ({ pageParam = 1 }) => fetAllBlog({ ...params, page: pageParam }),
    
    getNextPageParam: (lastPage) => {
      // lastPage.pages is total pages, lastPage.page is current page
      return lastPage.page < lastPage.pages ? lastPage.page + 1 : undefined;
    },

    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });
};




export const useBlog = (id) => {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: () => fetchBlogById(id),
    enabled: !!id, // only fetch if id exists
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });
};
