import * as yup from 'yup';
export declare const productSchema: {
    sku_id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    sku_name: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    prod_dimension: yup.StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
};
