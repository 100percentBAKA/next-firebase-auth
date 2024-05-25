import * as yup from "yup";

const LOGIN_SCHEMA = yup.object({
  email: yup
    .string()
    .email("Email of invalid format")
    .required("Email is required"),

  password: yup
    .string()
    .min(6, "Password should be of min length of 6 characters")
    .required("Password is required"),
});

const REGISTER_SCHEMA = yup.object({
  email: yup
    .string()
    .email("Email of invalid format")
    .required("Email is required"),

  password: yup
    .string()
    .min(6, "Password should be of min length of 6 characters")
    .required("Password is required"),
});

export { LOGIN_SCHEMA, REGISTER_SCHEMA };
