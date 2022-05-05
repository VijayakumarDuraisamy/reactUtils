import * as yup from 'yup' 


export const loginSchema = {
    username: yup.string().required("Username field is required"),
    password: yup.string().required("Password field is required")
}

export const emailSchema = {
    email: yup.string().email("Enter valid email id").required("Email field is required")
}