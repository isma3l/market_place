import { type StateCreator } from 'zustand';

export interface PodcastState {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

export const podcastStoreCreator: StateCreator<PodcastState> = (set) => ({
  isLoading: false,
  setIsLoading: (value: boolean) => set({ isLoading: value }),
});
