import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const employmentSchema = {
    idcardno: yup.string().required(REQUIRED_TEXT),
    doj: yup.string().required(REQUIRED_TEXT),
    dept: yup.string().required(REQUIRED_TEXT),
    band: yup.string().required(REQUIRED_TEXT),
    designation: yup.string().required(REQUIRED_TEXT),
    idactive: yup.string().required(REQUIRED_TEXT),
    pf: yup.string().required(REQUIRED_TEXT),
    esi: yup.string().required(REQUIRED_TEXT),
    contractor: yup.string().required(REQUIRED_TEXT),
    salby: yup.string().required(REQUIRED_TEXT),
    saltype: yup.string().required(REQUIRED_TEXT),
    monthly: yup.string().required(REQUIRED_TEXT),
    tempid : yup.string().required(REQUIRED_TEXT),
    hostel: yup.string().required(REQUIRED_TEXT),
    }