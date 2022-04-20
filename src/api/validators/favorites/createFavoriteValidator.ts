import * as yup from "yup";

const createFavoriteValidator = yup.object({
  title: yup.string().required(),
  items: yup.array().of(yup.string()).required(),
  url: yup.string().url().required(),
  description: yup.string().required(),
});

export default createFavoriteValidator;
