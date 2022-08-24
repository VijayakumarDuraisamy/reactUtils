import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'
import {LIMIT_TEXT} from '../config/validators'
import {DESCRIPTION_TEXT} from '../config/validators'
import {ALPHA_TEXT} from '../config/validators'

export const leadstageSchema = {
  stage_level: yup.number().min(1).max(10).required(REQUIRED_TEXT),
  stage_name:yup.string().trim().max(50,(LIMIT_TEXT)).required(REQUIRED_TEXT).matches(/^[aA-zZ\s]+$/ , (ALPHA_TEXT)),
  leadstage_description: yup.string().max(250,(DESCRIPTION_TEXT)).matches(/^[aA-zZ\s]+$/, (ALPHA_TEXT)),
}
