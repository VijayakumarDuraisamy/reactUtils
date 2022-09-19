import * as yup from 'yup' 
import { REQUIRED_TEXT } from '../config/validators'



export const loginSchema = {
    email: yup.string().required(REQUIRED_TEXT),
    password: yup.string().required(REQUIRED_TEXT)
}
