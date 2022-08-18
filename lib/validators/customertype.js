import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const customertypeSchema = {
  customer_type: yup.string().trim().required(REQUIRED_TEXT),
 }
