import { create } from 'zustand';
import { type PodcastState, podcastStoreCreator } from './podcastStoreCreator';

export const usePodcastStore = create<PodcastState>()(podcastStoreCreator);
