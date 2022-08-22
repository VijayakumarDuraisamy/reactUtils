import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const customertypeSchema = {
  customer_type: yup.string().trim().min(1).max(50).required(REQUIRED_TEXT),
 }
