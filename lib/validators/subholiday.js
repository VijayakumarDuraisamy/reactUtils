import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
import { LIMIT_TEXT } from '../config/validators';
import { ALPHA_TEXT } from '../config/validators';
export var subholidaySchema = {
    holidays: yup.string().trim().max(50, (LIMIT_TEXT)).required(REQUIRED_TEXT).matches(/^[aA-zZ\s]+$/, (ALPHA_TEXT)),
    holidaydate: yup.date().required(REQUIRED_TEXT).max("2500-00-00", "Invalid Date"),
    holidayid: yup.string().required(REQUIRED_TEXT)
};
