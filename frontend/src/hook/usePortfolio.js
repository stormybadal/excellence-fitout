import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchAllPortfolio, fetchPortfolioById } from "../api/portfolio.api";

// Infinite query for portfolio list
export const usePortfolio = (params = {}) => {
  return useInfiniteQuery({
    queryKey: ["portfolio", params],
    queryFn: ({ pageParam = 1 }) => fetchAllPortfolio({ ...params, page: pageParam }),
    getNextPageParam: (lastPage) => lastPage.page < lastPage.pages ? lastPage.page + 1 : undefined,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });
};

// Query for single portfolio/service
export const usePortfolioById = (id) => {
  return useQuery({
    queryKey: ["portfolio", id],
    queryFn: () => fetchPortfolioById(id),
    enabled: !!id, // only fetch if id exists
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });
};
