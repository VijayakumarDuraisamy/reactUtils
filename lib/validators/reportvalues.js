import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var otSchema = {
    rvalue: yup.string().required(REQUIRED_TEXT).matches(/^[0-9]+$/, 'Enter numbers only'),
    //compcode: yup.string().required(REQUIRED_TEXT),
};
