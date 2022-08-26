import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const delegatetoSchema = {
    lead_assigned_to: yup.string().required(REQUIRED_TEXT),
}