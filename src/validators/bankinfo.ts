import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var bankSchema = {
    bifsc: yup.string().required("ifsc field is required").matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Must - First 4 chars alphabets 5th char zero and last 6 chars alphanumeric"),
    bname: yup.string().required(REQUIRED_TEXT).matches(/^[A-Za-z\\s]+$/, "Enter Valid name"),
    //compcode: yup.string().required(REQUIRED_TEXT),
    //compname: yup.string().required(REQUIRED_TEXT),
    badd: yup.string().required(REQUIRED_TEXT),
    bbranch: yup.string().required(REQUIRED_TEXT).matches(/^[A-Za-z\\s]+$/, "Special charectors, Numbers not accepted"),
    bcode: yup.string().required(REQUIRED_TEXT).matches(/^[A-Za-z]+$/, "Special charectors, Numbers not accepted"),
    active: yup.string().required(REQUIRED_TEXT),
};
