import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const holidaySchema = {
    nhdate: yup.date().required(REQUIRED_TEXT).max("2500-00-00", "Invalid Date"),
    reason: yup.string().required(REQUIRED_TEXT),
    holcat: yup.string().required(REQUIRED_TEXT),
    //appldetails: yup.string().required(REQUIRED_TEXT),
    notes: yup.string(),
}