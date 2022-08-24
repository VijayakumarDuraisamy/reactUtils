import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
import { LIMIT_TEXT } from '../config/validators';
import { ALPHA_TEXT } from '../config/validators';
import { EMAIL_TEXT } from '../config/validators';
export var configcustomerSchema = {
    customer_name: yup.string().trim().max(50, (LIMIT_TEXT)).required(REQUIRED_TEXT).matches(/[abcdefghijklmnopqrstuvwxyz]+/, (ALPHA_TEXT)),
    organization_name: yup.string().trim().max(50, (LIMIT_TEXT)).required(REQUIRED_TEXT).matches(/[abcdefghijklmnopqrstuvwxyz]+/, (ALPHA_TEXT)),
    mobile_no: yup.string().trim().test('len', 'Must be exactly 10 characters', function (val) { return val && val.toString().length === 10; }).matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Ony 10 numbers must be accepted"),
    email: yup.string().trim().email(EMAIL_TEXT).matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Enter valid email address"),
    website: yup.string().trim().matches(/^((https?|http):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, " Enter valid website url")
};
