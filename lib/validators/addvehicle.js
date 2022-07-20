import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var addvehicleSchema = {
    vehiclename: yup.string().required(REQUIRED_TEXT),
    vehicleroot: yup.string().required(REQUIRED_TEXT),
    vehicleno: yup.string().required(REQUIRED_TEXT),
    vehiclecatgory: yup.string().required(REQUIRED_TEXT),
    vehicletype: yup.string().required(REQUIRED_TEXT),
    //compcode: yup.string().required(REQUIRED_TEXT),
    docdate: yup.string().required(REQUIRED_TEXT),
    ownername: yup.string().required(REQUIRED_TEXT),
    vrent: yup.string().required(REQUIRED_TEXT),
    drivername: yup.string().required(REQUIRED_TEXT),
};
