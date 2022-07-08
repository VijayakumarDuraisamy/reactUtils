import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var ratingSchema = {

    rating_name: yup.string().required(REQUIRED_TEXT)

};