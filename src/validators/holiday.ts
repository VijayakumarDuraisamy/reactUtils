import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const holidaySchema = {
  holiday_name: yup.string().required(REQUIRED_TEXT),
   }