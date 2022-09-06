import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const modifycatSchema = {
    change_cat_id: yup.string().required(REQUIRED_TEXT),
}