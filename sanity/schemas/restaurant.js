export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "title",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "title",
    },
    {
      name: "lat",
      type: "number",
      title: "title",
    },
    {
      name: "long",
      type: "number",
      title: "title",
    },
    {
      name: "address",
      type: "string",
      title: "title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "title",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("s'il vous plait entrez une valeur entre 1 et 5."),
    },
    {
      name: "type",
      type: "Category",
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
