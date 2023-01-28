import { query, ValidationChain } from "express-validator";
import { UserModel } from "../../../../models";

const validateDeleteRequest: ValidationChain[] = [
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
];

export default validateDeleteRequest;
