import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var subholidaySchema = {
    holidays: yup.string().required(REQUIRED_TEXT),
    holidaydate: yup.string().required(REQUIRED_TEXT),
    holidayid: yup.string().required(REQUIRED_TEXT)
};
