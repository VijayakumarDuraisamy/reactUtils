import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var secmasSchema = {
    docdate: yup.string().required(REQUIRED_TEXT),
    compcode: yup.string().required(REQUIRED_TEXT),
    finyr: yup.string().required(REQUIRED_TEXT),
    shift: yup.string().required(REQUIRED_TEXT),
};
