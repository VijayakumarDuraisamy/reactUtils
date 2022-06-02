import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var secmasSchema = {
    docdate: yup.string().required(REQUIRED_TEXT),
};
