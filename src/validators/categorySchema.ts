import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'
//for Skill Management
export const categorySchema = {
  category_name: yup.string().matches(/^[a-zA-Z0-9\-]+(\s[a-zA-Z0-9\-]+)*$/, "Enter a Valid Category name").trim().required(REQUIRED_TEXT),
  //category_description: yup.string().required(REQUIRED_TEXT)
  }