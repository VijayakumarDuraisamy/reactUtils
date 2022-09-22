import * as yup from 'yup' 
import { REQUIRED_TEXT } from '../config/validators'



export const tempSchema = {
    template: yup.string().required(REQUIRED_TEXT)
}
