import * as yup from 'yup'
import { EMAIL_TEXT, GST_TEXT, REQUIRED_TEXT, URL_TEXT, ZIP_TEXT } from '../config/validators'
import {LIMIT_TEXT} from '../config/validators'
import {ALPHA_TEXT} from '../config/validators'

export const configcustomerSchema = {
  
  organization_name:yup.string().trim().max(50,(LIMIT_TEXT)).required(REQUIRED_TEXT).matches(/[abcdefghijklmnopqrstuvwxyz]+/ , (ALPHA_TEXT)),
  industry_type:yup.string().trim().max(50,(LIMIT_TEXT)).matches(/[abcdefghijklmnopqrstuvwxyz]+/ , (ALPHA_TEXT)),
  address:yup.string().trim().max(100),
  pan:yup.string().matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, (PAN_TEXT)),
  mobile_no:yup.number().min(6000000000(MOBILE_TEXT)).max(9999999999,(MOBILE_TEXT)), city: yup.string().trim().max(50),
  state:yup.string().trim().max(50),
  email: yup.string().email(EMAIL_TEXT),
  website:yup.string().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,(URL_TEXT)),
  pincode:yup.string().matches(/^[1-9][0-9]{5}$/,(ZIP_TEXT)),
  gst:yup.string().matches(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, (GST_TEXT)),
};
