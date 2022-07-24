import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const addLeadSchema = {
    lead_name: yup.string().required(REQUIRED_TEXT),
    customer_name: yup.string().required(REQUIRED_TEXT),
    tag: yup.string().required(REQUIRED_TEXT),
    lead_assigned_to: yup.string().required(REQUIRED_TEXT),
}