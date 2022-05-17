import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const secSchema = {
  idcardno: yup.string().required(REQUIRED_TEXT),
  alndate: yup.string().required(REQUIRED_TEXT),
  aintime: yup.string().required(REQUIRED_TEXT),
  aoutdate: yup.string().required(REQUIRED_TEXT),
  aouttime: yup.string().required(REQUIRED_TEXT),
  thrs: yup.string().required(REQUIRED_TEXT),
  }