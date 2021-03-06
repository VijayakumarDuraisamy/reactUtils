import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const AttdnceEntrySchema = {
  docdate: yup.string().required(REQUIRED_TEXT),
  idcard: yup.string().required(REQUIRED_TEXT),
  shift: yup.string().required(REQUIRED_TEXT),
  temp: yup.string().required(REQUIRED_TEXT),
  lop: yup.string().required(REQUIRED_TEXT),
}