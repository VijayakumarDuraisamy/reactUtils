import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
import { LIMIT_TEXT } from '../config/validators';
export var assignedtaskSchema = {
    from_date: yup.date().required(REQUIRED_TEXT).max("2500-00-00", "Invalid Date"),
    to_date: yup.date().required(REQUIRED_TEXT).min(yup.ref("from_date"), "End date can't be lesser than start date").max("2500-00-00", "Invalid Date"),
    task: yup.string().trim().max(50, (LIMIT_TEXT)).required(REQUIRED_TEXT),
    sub_task: yup.string().trim().max(50, (LIMIT_TEXT)).required(REQUIRED_TEXT),
    category: yup.string().trim().max(50, (LIMIT_TEXT)).required(REQUIRED_TEXT),
    emp_id: yup.string().trim().required(REQUIRED_TEXT)
};
