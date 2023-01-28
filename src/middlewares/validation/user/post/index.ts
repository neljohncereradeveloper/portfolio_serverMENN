import { body, ValidationChain } from "express-validator";
import { MOBILE_NUMBER, FULLNAME } from "./../../../../constants/index";

const validatePostRequest: ValidationChain[] = [
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

export default validatePostRequest;
