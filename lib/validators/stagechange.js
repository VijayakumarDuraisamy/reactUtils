import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var stgnameSchema = {
    stage_level_id: yup.string().required(REQUIRED_TEXT),
};
