import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const subholidaySchema = {
  holidays: yup.string().required(REQUIRED_TEXT),
  holidaydate: yup.string().required(REQUIRED_TEXT),
}