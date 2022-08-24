import * as yup from 'yup';
export declare const holidaySchema: {
    nhdate: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    reason: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    holcat: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    notes: yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
};
