import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
import { LIMIT_TEXT } from '../config/validators';
export var categoryTypeSchema = {
    sub_category_name: yup.string().trim().max(50, (LIMIT_TEXT)).required(REQUIRED_TEXT).matches(/^[a-z][a-z0-9_]*$/, "Enter a Valid Type Name"),
};
