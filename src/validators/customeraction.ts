import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const customerActionSchema = {
  action_name: yup.string().max(50).trim().required(REQUIRED_TEXT),
  
  }