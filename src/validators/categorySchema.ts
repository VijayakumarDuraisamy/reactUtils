import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const categorySchema = {
  category_name: yup.string().trim().required(REQUIRED_TEXT),
  //category_description: yup.string().required(REQUIRED_TEXT)
  }