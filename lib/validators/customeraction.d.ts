import * as yup from 'yup';
export declare const customerActionSchema: {
    action_name: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    action_description: yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
};
