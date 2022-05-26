import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const AttdnceMasterSchema = {
  docid: yup.string().required(REQUIRED_TEXT),
  compcode: yup.string().required(REQUIRED_TEXT),
  docdate: yup.string().required(REQUIRED_TEXT),
  }