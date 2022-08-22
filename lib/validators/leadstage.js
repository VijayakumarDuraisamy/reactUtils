import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
export var leadstageSchema = {
    stage_level: yup.string().required(REQUIRED_TEXT),
    stage_name: yup.string().trim().max(50).required(REQUIRED_TEXT),
    //leadstage_description: yup.string().required(REQUIRED_TEXT),
};
