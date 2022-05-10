import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const contactSchema = {
    city: yup.string().required(REQUIRED_TEXT),
    district: yup.string().required(REQUIRED_TEXT),
    state: yup.string().required(REQUIRED_TEXT),
    country1: yup.string().required(REQUIRED_TEXT),
    pcode1: yup.string().required(REQUIRED_TEXT),
    mobno1: yup.string().required(REQUIRED_TEXT),
    }