import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var sourceSchema = {
    source_name: yup.string().required(REQUIRED_TEXT),
    //source_description: yup.string().required(REQUIRED_TEXT)
};
