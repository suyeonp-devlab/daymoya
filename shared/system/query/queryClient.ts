import { DefaultOptions, QueryClient } from "@tanstack/react-query";

const getQueryDefaultOptions = (): DefaultOptions => {
  return {
    queries: {
      staleTime: 1000 * 30,
      gcTime: 1000 * 60 * 5,
      retry: 1,
      refetchOnWindowFocus: false
    },
    mutations: {
      retry: 0
    },
  };
}

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: getQueryDefaultOptions(),
  });
};