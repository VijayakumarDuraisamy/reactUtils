import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const emppayinfoSchema = {
    paycode: yup.string().required(REQUIRED_TEXT),
    paydesc: yup.string().required(REQUIRED_TEXT),
    preamount: yup.string().required(REQUIRED_TEXT),
    incamount: yup.string().required(REQUIRED_TEXT),
}
