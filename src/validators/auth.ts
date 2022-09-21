import * as yup from 'yup' 


export const loginSchema = {
    username: yup.string().required("Field is required"),
    password: yup.string().required("Field is required")
}

export const emailSchema = {
    email: yup.string().email("Enter valid email id").required("Email field is required")
}
