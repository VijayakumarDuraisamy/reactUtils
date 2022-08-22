import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'
import {LIMIT_TEXT} from '../config/validators'
import {DESCRIPTION_TEXT} from '../config/validators'
import {ALPHA_TEXT} from '../config/validators'


export const sourceSchema = {
  source_name:yup.string().trim().max(50,(LIMIT_TEXT)).required(REQUIRED_TEXT).matches(/[abcdefghijklmnopqrstuvwxyz]+/ , (ALPHA_TEXT)),
  source_description:yup.string().trim().max(250,(DESCRIPTION_TEXT)).matches(/[abcdefghijklmnopqrstuvwxyz]+/ , (ALPHA_TEXT)),
}