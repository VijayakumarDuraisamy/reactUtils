import * as yup from 'yup';
import { DESCRIPTION_TEXT, REQUIRED_TEXT } from '../config/validators';
export var actiontrackerSchema = {
    item: yup.string().trim().max(200, (DESCRIPTION_TEXT)).required(REQUIRED_TEXT),
    exp_end_date: yup.date().required(REQUIRED_TEXT).max("2500-00-00", "Invalid Date"),
    assigned_to_tracker_id: yup.string().trim().required(REQUIRED_TEXT),
    lead_status_id: yup.string().required(REQUIRED_TEXT),
    description: yup.string().max(500, "Accepts Less than 500 Characters Only")
};
