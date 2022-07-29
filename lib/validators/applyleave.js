import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var applyleaveSchema = {
    leavetype: yup.string().required(REQUIRED_TEXT),
    //from_date: yup.string().required(REQUIRED_TEXT),
    //to_date: yup.string().required(REQUIRED_TEXT),
    no_of_days: yup.string().required(REQUIRED_TEXT),
};
