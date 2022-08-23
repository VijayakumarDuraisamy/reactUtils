import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const AttdnceMasterSchema = {
  //compcode: yup.string().required(REQUIRED_TEXT),
  docdate1: yup.date().required(REQUIRED_TEXT),
  }