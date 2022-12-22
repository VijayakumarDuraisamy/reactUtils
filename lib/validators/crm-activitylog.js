import * as yup from 'yup';
import { DESCRIPTION_TEXT, REQUIRED_TEXT } from '../config/validators';
export var activitylogSchema = {
    attended_by: yup.string().trim().required(REQUIRED_TEXT),
    action_taken: yup.string().trim().max(250, (DESCRIPTION_TEXT)).required(REQUIRED_TEXT),
    attended_date: yup.date().required(REQUIRED_TEXT).max("2500-00-00", "Invalid Date"),
    spent_time: yup.string().trim().required(REQUIRED_TEXT),
};
