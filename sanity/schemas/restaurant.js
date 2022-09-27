export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Restaurant",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude",
    },
    {
      name: "long",
      type: "number",
      title: "Longitude",
    },
    {
      name: "address",
      type: "string",
      title: "Restaurant adress",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a rating from 1 to 5 stars",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("s'il vous plait entrez une valeur entre 1 et 5."),
    },
    {
      name: "type",
      type: "Category",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      type: "array",
      title: "dishes",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
