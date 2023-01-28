import express from "express";
import { userController } from "../../controllers";
import { returnValidationErrors } from "../../helper";
const { createUser, searchUser, updateUser,deleteUser } = userController;
/** middlewares */
import {
  validatePostRequest,
  validatePutRequest,
  validateDeleteRequest
} from "../../middlewares/validation/user";

/** user main routes */
const router = express.Router();
router
  .route("/")
  .post(validatePostRequest, returnValidationErrors, createUser)
  .put(validatePutRequest, returnValidationErrors, updateUser)
  .delete(validateDeleteRequest, returnValidationErrors, deleteUser);

router.route("/search").get(searchUser);

export default router;
