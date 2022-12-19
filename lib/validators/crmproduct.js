import * as yup from 'yup';
import { REQUIRED_TEXT } from '../config/validators';
import { LIMIT_TEXT } from '../config/validators';
import { DESCRIPTION_TEXT } from '../config/validators';
import { ALPHA_TEXT } from '../config/validators';
export var productSchema = {
    sku_id: yup.string().trim().required(REQUIRED_TEXT),
    sku_name: yup.string().trim().max(50, (LIMIT_TEXT)).required(REQUIRED_TEXT).matches(/^[aA-zZ\s]+$/, (ALPHA_TEXT)),
    custom_fields_1: yup.string().trim().nullable(true).max(250, (DESCRIPTION_TEXT)).matches(/^[aA-zZ\s]+$/, (ALPHA_TEXT)),
};
