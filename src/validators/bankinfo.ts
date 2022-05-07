import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const bankSchema = {
    bifsc: yup.string().required("ifsc field is required").matches(/^.*[^\s]{4}\d{7}.*$/, "enter valid ifsc number"),
    bankaccountno: yup.number().required(REQUIRED_TEXT).min(9, "invalid number").max(18, "invalid number"),
    bname: yup.string().required(REQUIRED_TEXT),
    compcode: yup.string().required(REQUIRED_TEXT),
    compname: yup.string().required(REQUIRED_TEXT),
    badd: yup.string().required(REQUIRED_TEXT),
    bbranch: yup.string().required(REQUIRED_TEXT),
    bcode: yup.string().required(REQUIRED_TEXT),
}