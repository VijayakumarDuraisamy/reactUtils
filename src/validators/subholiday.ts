import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const subholidaySchema = {
  holidays: yup.string().required(REQUIRED_TEXT),
  holidaydate: yup.date().required(REQUIRED_TEXT).max("2500-00-00", "Invalid Date"),
  holidayid: yup.string().required(REQUIRED_TEXT)
}