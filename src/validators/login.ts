import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'
import { EMAIL_TEXT } from '../config/validators'

export const loginSchema = {
    username: yup.string().required(REQUIRED_TEXT),
    password: yup.string().required(REQUIRED_TEXT),
    email: yup.string().trim().email(EMAIL_TEXT).required(REQUIRED_TEXT),
   
}