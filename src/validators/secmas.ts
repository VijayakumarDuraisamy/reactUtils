import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const secmasSchema = {
  tcompcode: yup.string().required(REQUIRED_TEXT),
  docdate: yup.string().required(REQUIRED_TEXT),
  shift: yup.string().required(REQUIRED_TEXT),
  stempdesc: yup.string().required(REQUIRED_TEXT),
  stemp: yup.string().required(REQUIRED_TEXT),
  sctemp: yup.string().required(REQUIRED_TEXT),
  
}