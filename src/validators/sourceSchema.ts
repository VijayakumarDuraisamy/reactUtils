import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const sourceSchema = {
  source_name: yup.string().trim().max(50).required(REQUIRED_TEXT),
  }