export declare const activitylogSchema: {
    attended_by: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    action_taken: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    attended_date: import("yup/lib/date").RequiredDateSchema<Date, import("yup/lib/types").AnyObject>;
    time_spent: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
};
