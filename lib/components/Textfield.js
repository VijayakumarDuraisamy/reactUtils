import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import TextField from '@mui/material/TextField';
import { useFormikContext, getIn } from 'formik';
var MyTextField = function (_a) {
    var name = _a.name, labelname = _a.labelname, type = _a.type, onChanges = _a.onChanges, formikProps = _a.formikProps;
    var _b = useFormikContext(), values = _b.values, errors = _b.errors, touched = _b.touched, handleChange = _b.handleChange, handleBlur = _b.handleBlur;
    var fieldValue = getIn(values, name);
    var fieldError = getIn(errors, name);
    var fieldTouched = getIn(touched, name);
    // console.log(errors, "err")
    React.useEffect(function () {
        if (fieldValue) {
            if (formikProps) {
                formikProps(values);
            }
        }
    }, [fieldValue]);
    return (_jsx(TextField, { type: type, name: name, 
        //   size='small'
        label: labelname, fullWidth: true, variant: "outlined", id: name, value: fieldValue, onChange: handleChange, onBlur: handleBlur, error: fieldTouched && !!fieldError, helperText: fieldTouched && fieldError, InputLabelProps: type === 'time' || "date" ? { shrink: true } : {} }));
};
export default MyTextField;
