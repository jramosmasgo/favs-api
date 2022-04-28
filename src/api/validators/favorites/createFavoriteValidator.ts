import * as yup from "yup";

const createFavoriteValidator = yup.object({
  name: yup.string().required(),
  favs: yup.array().of(
    yup.object().shape({
      title: yup.string().required().min(2),
      description: yup.string().required().min(2),
      link: yup.string().url().required(),
    })
  ),
});

export default createFavoriteValidator;
