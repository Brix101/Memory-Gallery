import { api } from "../app/api";
import { Image } from "../interfaces";

const imageEndPoints = api.injectEndpoints({
  endpoints: (build) => ({
    getImages: build.query<Image[], string>({
      query: () => ({
        url: "/images",
      }),
    }),
  }),
});

export const { useGetImagesQuery } = imageEndPoints;
