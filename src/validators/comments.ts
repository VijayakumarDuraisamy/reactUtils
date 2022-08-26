import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const commentsSchema = {
    comments_txt: yup.string().required(REQUIRED_TEXT),
}