import { Schema } from "swagger-jsdoc";

export const loginSchema: Schema = {
  type: "object",
  properties: {
    email: {
      type: "string",
    },
    password: {
      type: "string",
    },
  },
};
