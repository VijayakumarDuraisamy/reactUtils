import * as yup from 'yup';
import { DESCRIPTION_TEXT, REQUIRED_TEXT } from '../config/validators';
export var actiontrackerSchema = {
    item: yup.string().trim().max(250, (DESCRIPTION_TEXT)).required(REQUIRED_TEXT),
    start_date: yup.date().required(REQUIRED_TEXT),
    exp_end_date: yup.date().required(REQUIRED_TEXT).min(yup.ref("start_date"), "End date can't be before start date"),
    assigned_to_tracker_id: yup.string().trim().required(REQUIRED_TEXT),
    lead_status_id: yup.string().required(REQUIRED_TEXT)
};
