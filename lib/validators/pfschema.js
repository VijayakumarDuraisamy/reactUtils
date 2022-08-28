import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var pfSchema = {
    fromvalue: yup.string().required(REQUIRED_TEXT).matches(/^[+-]?(\d*\.)?\d+$/, 'Enter numbers only'),
    tovalue: yup.string().required(REQUIRED_TEXT).matches(/^[+-]?(\d*\.)?\d+$/, 'Enter numbers only'),
};
