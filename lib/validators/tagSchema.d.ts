import * as yup from 'yup';
export declare const tagSchema: {
    tag_name: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    tag_description: yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
};
