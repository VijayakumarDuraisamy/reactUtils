import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const otSchema = {
    rvalue: yup.string().required(REQUIRED_TEXT),
    //compcode: yup.string().required(REQUIRED_TEXT),
    }