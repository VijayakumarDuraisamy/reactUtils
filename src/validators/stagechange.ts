import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const stgnameSchema = {
    stg_name: yup.string().required(REQUIRED_TEXT),
}