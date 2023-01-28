export const IS_PROD = process.env.NODE_ENV === "production" ? true : false;
export const PORT = 3001 || process.env.PORT!;

export const FIELDS_USER = "_id fullName mobileNumber";
/** model name */
export const MODEL_USER = "user";
/** fields name */
export const MOBILE_NUMBER = "mobileNumber";
export const FULLNAME = "fullName";
