import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var ondutymasterSchema = {
    finyear: yup.string().required(REQUIRED_TEXT),
    compname: yup.string().required(REQUIRED_TEXT),
    docid: yup.string().required(REQUIRED_TEXT),
    docdate: yup.string().required(REQUIRED_TEXT),
};