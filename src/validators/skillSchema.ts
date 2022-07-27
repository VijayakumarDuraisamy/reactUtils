import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var skillSchema = {

 skill_name: yup.string().trim().required(REQUIRED_TEXT),
 
};