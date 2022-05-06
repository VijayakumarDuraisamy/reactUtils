import { jsx as _jsx } from "react/jsx-runtime";
import TextField from '@material-ui/core/TextField';
var InputField = function (props) {
    return (_jsx(TextField, { onChange: props.onChange, onBlur: props.onBlur, margin: "normal", required: true, fullWidth: true, id: props.name, label: props.label, name: props.name, autoComplete: props.name, autoFocus: true, type: props.type ? props.type : "text", error: props.touched && Boolean(props.error), helperText: props.touched && props.error }));
};
export default InputField;
