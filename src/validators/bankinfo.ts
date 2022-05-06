import * as yup from 'yup' 

export const bankSchema = {
    ifsc: yup.string().required("ifsc field is required").matches(/^.*((?=.*[A-Z]){4})0((?=.*[A-Z0-9]){6}).*$/, "enter valid ifsc number"),
    bankaccountno: yup.number().required("this field is required").min(9, "invalid number").max(18, "invalid number"),
    bankname: yup.string().required("this field is required"),
    address: yup.string().required("this field is required"),
    branch: yup.string().required("this field is required")
 }