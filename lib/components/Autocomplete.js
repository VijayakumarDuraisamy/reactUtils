var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Autocomplete, TextField } from '@mui/material';
import { useFormikContext, getIn } from 'formik';
var MyAutocomplete = function (_a) {
    var name = _a.name, label = _a.label, _b = _a.type, type = _b === void 0 ? 'text' : _b, options = _a.options, getOptionLabel = _a.getOptionLabel, access = _a.access;
    var _c = useFormikContext(), values = _c.values, errors = _c.errors, touched = _c.touched, handleChange = _c.handleChange, handleBlur = _c.handleBlur;
    var fieldValue = getIn(values, name);
    var fieldError = getIn(errors, name);
    var fieldTouched = getIn(touched, name);
    return (_jsx(Autocomplete, { options: options, getOptionLabel: getOptionLabel, value: fieldValue, id: name, onChange: function (event, newValue) {
            handleChange({
                target: {
                    name: name,
                    value: newValue,
                },
            });
        }, disabled: access, onBlur: handleBlur, renderInput: function (params) { return (_jsx(TextField, __assign({}, params, { type: type, name: name, id: name, label: label, error: fieldTouched && !!fieldError, helperText: fieldTouched && fieldError }))); } }));
};
export default MyAutocomplete;
