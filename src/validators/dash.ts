import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const dashSchema = {
  docdate: yup.string().required(REQUIRED_TEXT),
  ptransaction: yup.string().required(REQUIRED_TEXT),
  docid: yup.string().required(REQUIRED_TEXT),
     
}