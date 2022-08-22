import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var holidaySchema = {
    nhdate: yup.string().required(REQUIRED_TEXT),
    reason: yup.string().required(REQUIRED_TEXT),
    holcat: yup.string().required(REQUIRED_TEXT),
    //appldetails: yup.string().required(REQUIRED_TEXT),
    notes: yup.string(),
};
