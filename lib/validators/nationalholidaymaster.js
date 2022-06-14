import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var holidaymasterSchema = {
    compname: yup.string().required(REQUIRED_TEXT),
};
