import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var payTransDetSchema = {
    //enameidno: yup.string().required(REQUIRED_TEXT),
    empid1: yup.string().required(REQUIRED_TEXT),
    amount: yup.string().required(REQUIRED_TEXT),
};
