import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var otSchema = {
    othrs: yup.string().required(REQUIRED_TEXT),
    idcard: yup.string().required(REQUIRED_TEXT),
    otdate: yup.date().required(REQUIRED_TEXT).max("2500-00-00", "Invalid Date"),
};
