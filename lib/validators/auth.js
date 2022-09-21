import * as yup from 'yup';
export var loginSchema = {
    username: yup.string().required("Field is required"),
    password: yup.string().required("Field is required")
};
export var emailSchema = {
    email: yup.string().email("Enter valid email id").required("Email field is required")
};
