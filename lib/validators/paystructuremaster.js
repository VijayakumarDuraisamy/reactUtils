import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var payStrucMasSchema = {
    //compcode: yup.string().required(REQUIRED_TEXT),
    docdate: yup.date().required(REQUIRED_TEXT).max("2500-00-00", "Invalid Date"),
    //paycat: yup.string().required(REQUIRED_TEXT),
    //finyear: yup.string().required(REQUIRED_TEXT),
    utype: yup.string().required(REQUIRED_TEXT),
};
