import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var secmasSchema = {
    docdate: yup.string().required(REQUIRED_TEXT),
    tcompcode: yup.string().required(REQUIRED_TEXT),
    tfinyear: yup.string().required(REQUIRED_TEXT),
    shift: yup.string().required(REQUIRED_TEXT),
};
