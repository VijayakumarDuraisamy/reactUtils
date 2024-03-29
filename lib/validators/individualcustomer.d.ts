export namespace individualcustomerSchema {
    const customer_name: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    const job_position: yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    const address: yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    const pan: yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    const mobile_no: yup.NumberSchema<number | undefined, import("yup/lib/types").AnyObject, number | undefined>;
    const city: yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    const state: yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    const email: yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    const website: yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    const pincode: yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
}
import * as yup from "yup";
