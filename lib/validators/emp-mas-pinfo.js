import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var empperinfoSchema = {
    emptype: yup.string().required(REQUIRED_TEXT),
    fname: yup.string().required(REQUIRED_TEXT),
    aadhaarname: yup.string().required(REQUIRED_TEXT),
    dob: yup.string().required(REQUIRED_TEXT),
    gender: yup.string().required(REQUIRED_TEXT),
    nationality: yup.string().required(REQUIRED_TEXT),
    religion: yup.string().required(REQUIRED_TEXT),
    maritalstatus: yup.string().required(REQUIRED_TEXT),
    disability: yup.string().required(REQUIRED_TEXT),
    exservice: yup.string().required(REQUIRED_TEXT),
};
