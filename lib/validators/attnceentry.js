import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var AttdnceMasterSchema = {
    //compcode: yup.string().required(REQUIRED_TEXT),
    docdate1: yup.string().required(REQUIRED_TEXT),
};
