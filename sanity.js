import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url";

//connection to the backend
const client = SanityClient({
  projectId: "cyyphxpp",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
