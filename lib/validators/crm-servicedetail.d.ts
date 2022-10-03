export declare const servicedetailSchema: {
    services_description: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    end_date: import("yup/lib/date").RequiredDateSchema<Date, import("yup/lib/types").AnyObject>;
    assigned_to: import("yup/lib/string").RequiredStringSchema<string | undefined, import("yup/lib/types").AnyObject>;
    closed_date: import("yup/lib/date").RequiredDateSchema<Date, import("yup/lib/types").AnyObject>;
};
