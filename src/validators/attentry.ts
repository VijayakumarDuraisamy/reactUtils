import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const AttdnceEntrySchema = {
  docdate: yup.date().required(REQUIRED_TEXT).max("2500-00-00", "Invalid Date"),
  idcard: yup.string().required(REQUIRED_TEXT),
  shift: yup.string().required(REQUIRED_TEXT),
  // temp: yup.string().required(REQUIRED_TEXT),
  lop: yup.string().required(REQUIRED_TEXT),
}