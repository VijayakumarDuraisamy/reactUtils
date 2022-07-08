import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var preferenceSchema = {

    preference_name: yup.string().required(REQUIRED_TEXT)

};