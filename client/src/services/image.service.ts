import { api } from "../app/api";

const imageEndPoints = api.injectEndpoints({
  endpoints: (build) => ({
    getImages: build.query({
      query: () => ({
        url: "/images",
      }),
    }),
  }),
});

export const { useGetImagesQuery } = imageEndPoints;
