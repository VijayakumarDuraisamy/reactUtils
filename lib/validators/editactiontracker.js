import * as yup from 'yup';
import { DESCRIPTION_TEXT, REQUIRED_TEXT } from '../config/validators';
export var editactiontrackerSchema = {
    item: yup.string().trim().max(250, (DESCRIPTION_TEXT)).required(REQUIRED_TEXT),
    lead_name: yup.string().trim().max(250, (DESCRIPTION_TEXT)).required(REQUIRED_TEXT),
    start_date: yup.date().required(REQUIRED_TEXT).min("2022-00-00", "Invalid Date"),
    assigned_to_tracker_id: yup.string().trim().required(REQUIRED_TEXT)
};
