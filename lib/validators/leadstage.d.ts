import * as yup from 'yup';
export declare const leadstageSchema: {
    stage_level: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    stage_name: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    leadstage_description: yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
};
