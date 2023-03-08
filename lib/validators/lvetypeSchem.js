import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
import { LIMIT_TEXT } from '../config/validators';
import { ALPHA_TEXT } from '../config/validators';
export var lvetypeSchema = {
    leavetype_name: yup.string().trim().max(50, (LIMIT_TEXT)).required(REQUIRED_TEXT).matches(/^[aA-zZ\s]+$/, (ALPHA_TEXT)),
    allocate_days: yup.string().trim().matches(/^[1-9]\d*$/, 'You must enter a positive number').required(REQUIRED_TEXT),
};
