import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";
import { registerSchema } from "./schemas/registerSchema";
import { loginSchema } from "./schemas/loginSchema";
import { ListFavoritesSchema } from "./schemas/registerListFavSchema";
import { responseSchema } from "./schemas/responseSchema";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.0",
  info: {
    title: "Documentacion Favs-API",
    description:
      "API to provide a better way to organize your favorite things: music, clothes, courses, etc., all in one place.",
    version: "1.0.0",
  },
  servers: [
    {
      description: "Local",
      url: `http://localhost:4000`,
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      response: responseSchema,
      login: loginSchema,
      register: registerSchema,
      listFavorite: ListFavoritesSchema,
    },
  },
  tags: [
    {
      name: "Users",
    },
    {
      name: "Favorites",
    },
  ],
};
const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["./src/api/routes/**/*Routes.ts"],
};

export default swaggerJSDoc(swaggerOptions);
