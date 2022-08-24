import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var notificationSchema = {
    status: yup.string().required(REQUIRED_TEXT),
    item: yup.string().trim().required(REQUIRED_TEXT),
    start_date: yup.date().required(REQUIRED_TEXT)
};
