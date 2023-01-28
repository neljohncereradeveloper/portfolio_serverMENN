import { Request, Response } from "express";
import { returnError, returnOk } from "../../helper";
import { MUserProps, IUserProps } from "../../types/models";
import { UserModel } from "../../models";
import {
  createRepo,
  deleteByIdRepo,
  findById,
  updateOneRepo,
} from "../../repository";
import { FIELDS_USER } from "../../constants";

/**
 * Controller create user
 *
 * @param req `Request`
 * @param res `Response`
 * @returns `Promise`
 */
const createUser = async (req: Request, res: Response): Promise<Response> => {
  const {
    fullName,

    mobileNumber,
  }: IUserProps = req.body;
  let user;
  try {
    user = await createRepo<MUserProps, IUserProps>(
      {
        fullName,
        mobileNumber,
      },
      UserModel
    );

    return returnOk(res, { data: user });
  } catch (error) {
    return returnError(req, res);
  }
};
/**
 * Controller update user informations
 *
 * @param req `Request`
 * @param res `Response`
 * @returns `Promise`
 */
const updateUser = async (req: Request, res: Response): Promise<Response> => {
  let { fullName, mobileNumber }: IUserProps = req.body;
  const { _id } = req.query;
  let user;
  try {
    const userUpdate = await updateOneRepo<MUserProps, IUserProps>(
      _id as any,
      { fullName, mobileNumber },
      UserModel
    );
    if (userUpdate) {
      user = await findById(UserModel, _id as string, FIELDS_USER);
    }
    return returnOk(res, { data: user });
  } catch (error) {
    return returnError(req, res);
  }
};
/**
 * Controller delete user
 *
 * @param req `Request`
 * @param res `Response`
 * @returns `Promise`
 */
const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  let { _id } = req.query;

  try {
    const userDelete = await deleteByIdRepo<MUserProps>(_id as any, UserModel);
    if (!userDelete) {
      return returnError(req, res);
    }
    return returnOk(res, { data: userDelete });
  } catch (error) {
    return returnError(req, res);
  }
};

/**
 * Controller search user
 *
 * @param req `Request`
 * @param res `Response`
 * @returns `Promise`
 */
const searchUser = async (req: Request, res: Response): Promise<Response> => {
  const { text } = req.query;
  try {
    const user = await UserModel.aggregate([
      {
        $match: {
          fullName: { $regex: text, $options: "i" },
        },
      },
    ]);
    return returnOk(res, { data: user });
  } catch (error) {
    return returnError(req, res);
  }
};

export default {
  createUser,
  updateUser,
  deleteUser,
  searchUser,
};
