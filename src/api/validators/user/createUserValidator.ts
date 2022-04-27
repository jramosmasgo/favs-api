import * as yup from "yup";

const createUserValidator = yup.object({
  name: yup.string().min(2, "").max(20).required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

export default createUserValidator;
