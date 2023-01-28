import { body, ValidationChain, query } from "express-validator";
import { UserModel } from "../../../../models";
import { FULLNAME, MOBILE_NUMBER } from "./../../../../constants/index";

const validatePutRequest: ValidationChain[] = [
  query("_id")
    .isMongoId()
    .rtrim()
    .withMessage("Must be a valid _id")
    .custom(async (value) => {
      const user = await UserModel.findById(value);
      if (!user) {
        return Promise.reject("User does not exist");
      }
      return;
    })
    .bail(),
  body(FULLNAME)
    .rtrim()
    .isString()
    .isLength({
      max: 20,
      min: 4,
    })
    .withMessage(
      "Must be string.Minimum of 4 characters.Maximum of 20 characters`"
    )
    .trim()
    .toLowerCase(),
  body(MOBILE_NUMBER)
    .rtrim()
    .isMobilePhone(["en-PH"])
    .withMessage("Must be a valid phone number"),
];

export default validatePutRequest;
