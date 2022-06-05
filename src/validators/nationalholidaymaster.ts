import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const holidaymasterSchema = {
    finyear: yup.string().required(REQUIRED_TEXT),
    compcode: yup.string().required(REQUIRED_TEXT),
    compname: yup.string().required(REQUIRED_TEXT),
}