import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var villageSchema = {
    villagename: yup.string().required(REQUIRED_TEXT),
};
