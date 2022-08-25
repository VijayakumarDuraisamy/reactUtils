import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const addvehicleSchema = {
    vehiclename: yup.string().required(REQUIRED_TEXT),
    active: yup.string().required(REQUIRED_TEXT),
    vehicleroot: yup.string().required(REQUIRED_TEXT),
    vehicleno: yup.string().required(REQUIRED_TEXT).matches(/[A-Za-z][A-Za-z]\/[0-9][0-9]\/[A-Za-z ][a-z]\/[0-9][0-9][0-9][0-9]$/, 'Invalid Vehicle Number'),
    vehiclecatgory: yup.string().required(REQUIRED_TEXT),
    vehicletype: yup.string().required(REQUIRED_TEXT),
    //compcode: yup.string().required(REQUIRED_TEXT),
    docdate: yup.date().required(REQUIRED_TEXT).max("2500-00-00", "Invalid Date"),
    ownername: yup.string().required(REQUIRED_TEXT).matches(/^[A-Za-z]+$/, "Enter valid Name"),
    vrent: yup.string().required(REQUIRED_TEXT).matches(/^[0-9]+$/, "Enter valid input"),
    drivername: yup.string().required(REQUIRED_TEXT).matches(/^[A-Za-z]+$/, "Enter Valid name"),
    }