"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var InputField = function (props) {
    return (react_1.default.createElement(TextField_1.default, { onChange: props.onChange, onBlur: props.onBlur, margin: "normal", required: true, fullWidth: true, id: props.name, label: props.label, name: props.name, autoComplete: props.name, autoFocus: true, type: props.type ? props.type : "text", error: props.touched && Boolean(props.error), helperText: props.touched && props.error }));
};
exports.default = InputField;
