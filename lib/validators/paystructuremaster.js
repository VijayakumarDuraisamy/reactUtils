import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var payStrucMasSchema = {
    compcode: yup.string().required(REQUIRED_TEXT),
    docid: yup.string().required(REQUIRED_TEXT),
    docdate: yup.string().required(REQUIRED_TEXT),
    paycat: yup.string().required(REQUIRED_TEXT),
    finyear: yup.string().required(REQUIRED_TEXT),
    utype: yup.string().required(REQUIRED_TEXT),
};
