import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var tagSchema = {
    tag_name: yup.string().trim().min(1).max(50).required(REQUIRED_TEXT),
};
