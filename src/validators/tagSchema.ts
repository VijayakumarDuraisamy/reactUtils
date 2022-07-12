import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const tagSchema = {
  tag_name: yup.string().required(REQUIRED_TEXT),
  tag_description: yup.string().required(REQUIRED_TEXT)
  }