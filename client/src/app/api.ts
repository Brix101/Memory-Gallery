import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { server } from "../constant/server";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${server}/api`,
    prepareHeaders(headers, api) {
      return headers;
    },
    credentials: "include",
  }),
  endpoints: (build) => ({
    // ...
  }),
});
