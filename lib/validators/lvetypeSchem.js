import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var lvetypeSchema = {
    leavetype_name: yup.string().trim().matches(/[abcdefghijklmnopqrstuvwxyz]+/, 'Invalid Name').required(REQUIRED_TEXT),
    allocate_days: yup.string().trim().matches(/^[1-9]\d*$/, 'You must enter a positive number').required(REQUIRED_TEXT),
};
