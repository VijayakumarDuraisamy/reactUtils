import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var tempSchema = {
    template: yup.string().required(REQUIRED_TEXT)
};
