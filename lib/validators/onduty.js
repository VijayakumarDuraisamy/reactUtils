import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var ondutySchema = {
    empname: yup.string().required(REQUIRED_TEXT),
    idcard: yup.string().required(REQUIRED_TEXT),
    paycat: yup.string().required(REQUIRED_TEXT),
    odate: yup.string().required(REQUIRED_TEXT),
    oday: yup.string().required(REQUIRED_TEXT),
    ohday: yup.string().required(REQUIRED_TEXT),
    thrs: yup.string().required(REQUIRED_TEXT),
};
