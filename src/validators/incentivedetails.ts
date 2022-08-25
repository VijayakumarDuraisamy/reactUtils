import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const prodIncentiveDetSchema = {
  //enameidno: yup.string().required(REQUIRED_TEXT),
  empid1: yup.string().required(REQUIRED_TEXT),
  amount: yup.string().required(REQUIRED_TEXT).matches(/^[0-9\b]+$/, "Enter valid amount"),
  incdate: yup.date().required(REQUIRED_TEXT).max("2500-00-00", "Invalid Date"),

}