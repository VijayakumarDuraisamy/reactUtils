import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var AttdnceMasterSchema = {
    docid: yup.string().required(REQUIRED_TEXT),
    compcode: yup.string().required(REQUIRED_TEXT),
    docdate1: yup.string().required(REQUIRED_TEXT),
};
