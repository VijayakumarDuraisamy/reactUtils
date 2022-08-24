import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const pfmasSchema = {
   paycode: yup.string().required(REQUIRED_TEXT),
   }