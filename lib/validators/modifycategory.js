import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var modifycatSchema = {
    modify_category: yup.string().required(REQUIRED_TEXT),
};
