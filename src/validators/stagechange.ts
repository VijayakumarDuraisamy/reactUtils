import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const stgnameSchema = {
    lead_id: yup.string().required(REQUIRED_TEXT),
}