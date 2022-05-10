import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var otSchema = {
    othrs: yup.string().required(REQUIRED_TEXT),
    idcard: yup.string().required(REQUIRED_TEXT),
    otdate: yup.string().required(REQUIRED_TEXT),
};
