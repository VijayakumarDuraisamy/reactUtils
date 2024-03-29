import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var dashSchema = {
    docdate: yup.date().required(REQUIRED_TEXT).max("2500-00-00", "Invalid Date"),
    ptransaction: yup.string().required(REQUIRED_TEXT),
};
