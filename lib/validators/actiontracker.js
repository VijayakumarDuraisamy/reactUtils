import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var actiontrackerSchema = {
    item: yup.string().required(REQUIRED_TEXT),
    start_date: yup.string().required(REQUIRED_TEXT),
    exp_end_date: yup.string().required(REQUIRED_TEXT),
    assigned_to_tracker: yup.string().required(REQUIRED_TEXT),
    status: yup.string().required(REQUIRED_TEXT)
};
