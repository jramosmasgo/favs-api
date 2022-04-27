import { Schema } from "swagger-jsdoc";

export const responseSchema: Schema = {
  type: "object",
  properties: {
    ok: {
      type: "boolean",
    },
    message: {
      type: "string",
    },
    data: {},
    error: {},
  },
};
