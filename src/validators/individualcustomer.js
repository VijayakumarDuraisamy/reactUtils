import * as yup from 'yup'
import { EMAIL_TEXT, MOBILE_TEXT, PAN_TEXT, REQUIRED_TEXT, URL_TEXT, ZIP_TEXT } from '../config/validators'
import {LIMIT_TEXT} from '../config/validators'
import {ALPHA_TEXT} from '../config/validators'
import {ADDRESS} from '../config/validators'


export const individualcustomerSchema = {
  
  customer_name: yup.string().trim().max(50,(LIMIT_TEXT)).required(REQUIRED_TEXT).matches(/^[aA-zZ\s]+$/ , (ALPHA_TEXT)),
  job_position:yup.string().trim().max(50,(LIMIT_TEXT)).matches(/^[aA-zZ\s]+$/ , (ALPHA_TEXT)),
  address:yup.string().trim().max(100).matches(/^[#.0-9a-zA-Z\s,-]+$/, (ADDRESS)),
  pan:yup.string().matches(/^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/, (PAN_TEXT)),
  mobile_no:yup.number().min(6000000000,(MOBILE_TEXT)).max(9999999999,(MOBILE_TEXT)),
  city: yup.string().trim().max(50),
  state:yup.string().trim().max(50),
  email: yup.string().matches(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/, (EMAIL_TEXT)),
  website:yup.string().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,(URL_TEXT)),
  pincode:yup.string().matches(/^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$/, (ZIP_TEXT)),
};
