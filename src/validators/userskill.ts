import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var userskillSchema = {

 skill_name: yup.string().trim().required(REQUIRED_TEXT),
 subskill_name: yup.string().trim().required(REQUIRED_TEXT),
 preference_name: yup.string().trim().required(REQUIRED_TEXT),
 category_name: yup.string().trim().required(REQUIRED_TEXT),
 rating_name: yup.string().trim().required(REQUIRED_TEXT),
 
};