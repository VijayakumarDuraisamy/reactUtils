import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
import { LIMIT_TEXT } from '../config/validators';
import { ALPHA_TEXT } from '../config/validators';
export var individualcustomerSchema = {
    customer_name: yup.string().trim().max(50, (LIMIT_TEXT)).required(REQUIRED_TEXT).matches(/[abcdefghijklmnopqrstuvwxyz]+/, (ALPHA_TEXT)),
    job_position: yup.string().trim().max(50, (LIMIT_TEXT)).matches(/[abcdefghijklmnopqrstuvwxyz]+/, (ALPHA_TEXT)),
    address: yup.string().trim().max(100),
    pan: yup.string().matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Enter a valid PAN number"),
    mobile_no: yup.number().min(6000000000, "invalid mobile number").max(9999999999, "invalid mobile number").required('mobile number is required'),
    city: yup.string().trim().max(50),
    state: yup.string().trim().max(50),
    email: yup.string().email('invalid email address').required('Required'),
    website: yup.string().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, 'Enter correct url!').required('Please enter website'),
    pincode: yup.string().matches(/^[1-9][0-9]{5}$/, "Enter a Valid Pincode"),
};
