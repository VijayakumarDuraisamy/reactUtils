import * as yup from 'yup'

export const commonSchema = {
    common: yup.string().required("this field is required"),
}