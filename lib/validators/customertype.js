import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
import { LIMIT_TEXT } from '../config/validators';
export var customertypeSchema = {
    customer_type: yup.string().trim().max(50, (LIMIT_TEXT)).required(REQUIRED_TEXT),
};
