import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "aod1vp3u",
  dataset: "production",
  apiVersion: "2026-05-18",
  useCdn: false,
});