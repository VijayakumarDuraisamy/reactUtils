import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var holidaySchema = {
    holiday_name: yup.string().matches(/[abcdefghijklmnopqrstuvwxyz]+/, 'Invalid Name').required(REQUIRED_TEXT),
};
