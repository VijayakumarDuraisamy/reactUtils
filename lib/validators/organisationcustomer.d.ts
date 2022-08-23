export namespace configcustomerSchema {
    const organization_name: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    const industry_type: yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    const address: yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    const pan: yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    const mobile_no: import("yup/lib/number").RequiredNumberSchema<number | undefined, import("yup/lib/types").AnyObject>;
    const city: yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    const state: yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    const email: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    const website: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    const pincode: yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    const gst: yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}
import * as yup from "yup";
