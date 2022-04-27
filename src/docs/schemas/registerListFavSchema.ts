import { Schema } from "swagger-jsdoc";

export const ListFavoritesSchema: Schema = {
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    favs: {
      type: "array",
      items: {
        type: "object",
        minItems: 1,
        properties: {
          title: {
            type: "string",
          },
          description: {
            type: "string",
          },
          link: {
            type: "string",
          },
        },
      },
    },
  },
};
