import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from '@tanstack/react-query';

const LIMIT_TIME = 1000 * 60 * 60 * 24; // 24 hours

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: LIMIT_TIME,
      staleTime: LIMIT_TIME,
    },
  },
});

export const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
});
