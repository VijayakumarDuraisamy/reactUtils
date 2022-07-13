import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var leadstageSchema = {
    stage_level: yup.string().required(REQUIRED_TEXT),
    stage_name: yup.string().required(REQUIRED_TEXT),
    stage_description: yup.string().required(REQUIRED_TEXT),
};