import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var userskillSchema = {

 skill_name: yup.string().required(REQUIRED_TEXT),
 rating_name: yup.string().required(REQUIRED_TEXT),
 
};