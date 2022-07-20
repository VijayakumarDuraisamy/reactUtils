import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var payTransMasterSchema = {
    paycode: yup.string().required(REQUIRED_TEXT),
    payperiod: yup.string().required(REQUIRED_TEXT),
    paydesc: yup.string().required(REQUIRED_TEXT),
    //compname: yup.string().required(REQUIRED_TEXT),
    //compcode: yup.string().required(REQUIRED_TEXT),
    //finyear: yup.string().required(REQUIRED_TEXT),
    paycat: yup.string().required(REQUIRED_TEXT),
};
