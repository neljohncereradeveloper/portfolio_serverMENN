import { model, Schema } from "mongoose";
import { MODEL_USER } from "../../constants";
import { MUserProps } from "../../types/models";

/** Schema */
const UserSchema = new Schema(
  {
    fullName: {
      type: String,
      require: true,
      lowercase: true,
    },
    mobileNumber: {
      type: String,
      require: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = model<MUserProps>(MODEL_USER, UserSchema);

export default UserModel;
