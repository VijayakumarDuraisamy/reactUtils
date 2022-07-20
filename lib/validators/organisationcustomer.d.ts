export namespace configcustomerSchema {
    const organization_name: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    const mobile_no: yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    const email: yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
    const website: yup.StringSchema<string | null | undefined, import("yup/lib/types").AnyObject, string | null | undefined>;
}
import * as yup from "yup";
