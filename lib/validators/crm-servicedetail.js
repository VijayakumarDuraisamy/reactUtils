import * as yup from 'yup';
import { DESCRIPTION_TEXT, REQUIRED_TEXT } from '../config/validators';
export var servicedetailSchema = {
    services_description: yup.string().trim().max(250, (DESCRIPTION_TEXT)).required(REQUIRED_TEXT),
    end_date: yup.date().required(REQUIRED_TEXT).max("2500-00-00", "Invalid Date"),
    assigned_to: yup.string().trim().required(REQUIRED_TEXT),
    closed_date: yup.date().required(REQUIRED_TEXT).max("2500-00-00", "Invalid Date"),
    status: yup.string().trim().required(REQUIRED_TEXT),
};
