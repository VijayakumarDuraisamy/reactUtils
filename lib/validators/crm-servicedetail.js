import * as yup from 'yup';
import { DESCRIPTION_TEXT, REQUIRED_TEXT } from '../config/validators';
export var servicedetailSchema = {
    services_description: yup.string().trim().max(250, (DESCRIPTION_TEXT)).required(REQUIRED_TEXT),
    end_date: yup.date().required(REQUIRED_TEXT),
    assigned_to: yup.string().trim().required(REQUIRED_TEXT),
    closed_date: yup.date().required(REQUIRED_TEXT),
    status: yup.string().trim().required(REQUIRED_TEXT),
};
