import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var allocatelveSchema = {
    leavetype_name: yup.string().required(REQUIRED_TEXT),
    allocate_days: yup.string().required(REQUIRED_TEXT).nullable()
};
