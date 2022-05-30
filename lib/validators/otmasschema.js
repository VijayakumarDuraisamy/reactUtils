import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var otmasSchema = {
    docdate: yup.string().required(REQUIRED_TEXT),
};
