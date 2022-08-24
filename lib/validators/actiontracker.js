import * as yup from 'yup';
import { DESCRIPTION_TEXT, REQUIRED_TEXT } from '../config/validators';
export var actiontrackerSchema = {
    item: yup.string().trim().max(250, (DESCRIPTION_TEXT)).required(REQUIRED_TEXT),
    start_date: yup.date().required(REQUIRED_TEXT),
    exp_end_date: yup.date().required(REQUIRED_TEXT),
    assigned_to_tracker: yup.string().trim().required(REQUIRED_TEXT),
    status: yup.string().required(REQUIRED_TEXT)
};
