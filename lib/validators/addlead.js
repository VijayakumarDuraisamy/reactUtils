import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var addLeadSchema = {
    lead_name: yup.string().trim().max(50).required(REQUIRED_TEXT),
    customer_name: yup.string().trim().max(50).required(REQUIRED_TEXT),
    tag: yup.string().trim().required(REQUIRED_TEXT),
    lead_assigned_to: yup.string().trim().max(50).required(REQUIRED_TEXT),
};
