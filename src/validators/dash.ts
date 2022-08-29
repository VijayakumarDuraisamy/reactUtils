import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const dashSchema = {
  docdate: yup.date().required(REQUIRED_TEXT).max("2500-00-00", "Invalid Date"), // date formation
  ptransaction: yup.string().required(REQUIRED_TEXT),
      
}