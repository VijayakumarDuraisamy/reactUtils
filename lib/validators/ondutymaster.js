import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var ondutymasterSchema = {
    //year: yup.string().required(REQUIRED_TEXT),
    //compcode: yup.string().required(REQUIRED_TEXT),
    //compname: yup.string().required(REQUIRED_TEXT),
    docdate: yup.date().required(REQUIRED_TEXT).max("2500-00-00", "Invalid Date"),
};
