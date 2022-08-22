import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var categorySchema = {
    category_name: yup.string().trim().max(50).required(REQUIRED_TEXT)
};
