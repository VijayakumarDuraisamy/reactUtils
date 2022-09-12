import * as yup from 'yup'
import { MINMAX_TEXT, NUM_TEXT, REQUIRED_TEXT } from '../config/validators'
import {LIMIT_TEXT} from '../config/validators'
import {DESCRIPTION_TEXT} from '../config/validators'
import {ALPHA_TEXT} from '../config/validators'

export const customerActionSchema = {
  action_level: yup.number().typeError(NUM_TEXT).min(1,(MINMAX_TEXT)).max(6,(MINMAX_TEXT)).required(REQUIRED_TEXT),
  action_name: yup.string().trim().max(50,(LIMIT_TEXT)).required(REQUIRED_TEXT).matches(/^[aA-zZ\s]+$/ , (ALPHA_TEXT)),
  action_description:yup.string().trim().nullable(true).max(250,(DESCRIPTION_TEXT)).matches(/^[aA-zZ\s]+$/, (ALPHA_TEXT)),
 }
