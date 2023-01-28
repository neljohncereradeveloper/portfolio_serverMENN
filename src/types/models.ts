import { Document } from "mongoose";

/** user model props */
export type IUserProps = {
  fullName: string;
  mobileNumber: string;
};
export type MUserProps = IUserProps & Document;
