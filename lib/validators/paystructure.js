import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var paySchema = {
    //paycode: yup.string().required(REQUIRED_TEXT),
    //epaycode: yup.string().required(REQUIRED_TEXT),
    paydesc: yup.string().required(REQUIRED_TEXT),
    pickfrom: yup.string().required(REQUIRED_TEXT),
};
