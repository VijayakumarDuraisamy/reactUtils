import * as yup from 'yup';
export declare const sourceSchema: {
    source_name: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    source_description: yup.StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
};
