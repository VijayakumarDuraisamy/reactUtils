import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var subskillSchema = {

 subskill_name: yup.string().trim().required(REQUIRED_TEXT),
 
};