import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const lvetypeSchema = {
    leavetype_name: yup.string().trim().matches(/[abcdefghijklmnopqrstuvwxyz]+/ , 'Invalid Name').required(REQUIRED_TEXT),
    //allow_override: yup.string().required(REQUIRED_TEXT)
    allocate_days: yup.string().trim().required(REQUIRED_TEXT),
}