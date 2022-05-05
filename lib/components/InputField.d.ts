import React from 'react';
interface InputFieldProps {
    onChange: any;
    onBlur: any;
    name: string;
    value: any;
    label: string;
    error?: string;
    touched?: boolean;
    type?: string;
}
declare const InputField: React.FC<InputFieldProps>;
export default InputField;
