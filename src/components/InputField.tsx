import React from 'react'
import TextField from '@material-ui/core/TextField';


interface InputFieldProps {
    onChange: any,
    onBlur: any,
    name: string,
    value: any,
    label: string,
    error?: string,
    touched?: boolean,
    type?: string
}

const InputField: React.FC<InputFieldProps> = (props) => {
    return (
        <TextField
            onChange={props.onChange}
            onBlur={props.onBlur}
            margin="normal"
            required
            fullWidth
            id={props.name}
            label={props.label}
            name={props.name}
            autoComplete={props.name}
            autoFocus
            type={props.type ? props.type : "text"}
            error={props.touched && Boolean(props.error)}
            helperText={props.touched && props.error}
        />
    )
}

export default InputField