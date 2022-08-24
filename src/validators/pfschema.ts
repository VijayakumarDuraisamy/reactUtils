import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const pfSchema = {
    fromvalue: yup.string().required(REQUIRED_TEXT).matches(/^[0-9]+$/, 'Enter numbers only'),
    tovalue: yup.string().required(REQUIRED_TEXT).matches(/^[0-9]+$/, 'Enter numbers only'),
   
}