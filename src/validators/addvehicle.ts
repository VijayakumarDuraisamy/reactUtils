import * as yup from 'yup'
import { REQUIRED_TEXT } from '../config/validators'

export const addvehicleSchema = {
    vehiclename: yup.string().required(REQUIRED_TEXT),
    vehicleroot: yup.string().required(REQUIRED_TEXT),
    vehicleno: yup.string().required(REQUIRED_TEXT),
    vehiclecatgory: yup.string().required(REQUIRED_TEXT),
    vehicletype: yup.string().required(REQUIRED_TEXT),
    //compcode: yup.string().required(REQUIRED_TEXT),
    docdate: yup.date().required(REQUIRED_TEXT).max("2500-00-00", "Invalid Date"),
    ownername: yup.string().required(REQUIRED_TEXT),
    vrent: yup.string().required(REQUIRED_TEXT),
    drivername: yup.string().required(REQUIRED_TEXT),
    }