import { faker } from '@faker-js/faker';
import { PodcastInterface } from '@/modules/core/models';

export const generateMockPodcasts = (length: number) => {
  const podcasts: PodcastInterface[] = Array.from({ length }).map(() => ({
    id: faker.number.int(),
    urlImage: faker.image.url(),
    title: faker.person.jobTitle(),
    author: faker.person.firstName(),
    description: faker.lorem.paragraph(),
  }));

  return podcasts;
};
