import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var pfSchema = {
    fromvalue: yup.string().required(REQUIRED_TEXT),
    tovalue: yup.string().required(REQUIRED_TEXT),
};
