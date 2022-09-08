import * as yup from 'yup';
export declare var categorySchema: {
    category_name: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    category_description: yup.StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
};
