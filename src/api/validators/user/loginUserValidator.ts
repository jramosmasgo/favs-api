import * as yup from "yup";

const createUserValidator = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default createUserValidator;
