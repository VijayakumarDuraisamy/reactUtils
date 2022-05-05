"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailSchema = exports.loginSchema = void 0;
var yup = require("yup");
exports.loginSchema = {
    username: yup.string().required("Username field is required"),
    password: yup.string().required("Password field is required")
};
exports.emailSchema = {
    email: yup.string().email("Enter valid email id").required("Email field is required")
};
