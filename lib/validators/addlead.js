import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var addLeadSchema = {
    lead_id: yup.number().min(1).max(3).required(REQUIRED_TEXT),
    lead_name: yup.string().required(REQUIRED_TEXT),
    customer_name: yup.string().required(REQUIRED_TEXT),
    tag: yup.string().required(REQUIRED_TEXT),
    lead_assigned_to: yup.string().required(REQUIRED_TEXT),
};
