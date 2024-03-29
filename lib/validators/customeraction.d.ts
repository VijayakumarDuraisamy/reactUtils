import * as yup from 'yup';
export declare const customerActionSchema: {
    action_level: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    action_name: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    action_description: yup.StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
};
