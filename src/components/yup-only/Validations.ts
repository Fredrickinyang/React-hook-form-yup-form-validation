import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required().min(2),
  email: yup.string().email().required(),
  phoneNumber: yup.number().min(11).required(),
  password: yup.string().min(4).max(10).required(),
  confrirmPassword: yup.string().min(4).max(10).required(),
});
