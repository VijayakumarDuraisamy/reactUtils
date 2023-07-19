import * as yup from 'yup';
export declare var actiontrackerSchema: {
    item: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    exp_end_date: import("yup/lib/date").RequiredDateSchema<Date | undefined, import("yup/lib/types").AnyObject>;
    assigned_to_tracker_id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    lead_status_id: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    description: yup.StringSchema<string | undefined, import("yup/lib/types").AnyObject, string | undefined>;
};
