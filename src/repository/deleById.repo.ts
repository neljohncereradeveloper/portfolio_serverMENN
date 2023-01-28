import { Model, ObjectId } from "mongoose";

const deleteByIdRepo = async <T>(
  _id: ObjectId,
  model: Model<T>
): Promise<T> => {
  const result = new Promise<T>((resolve, reject) => {
    model.findByIdAndDelete({ _id }, (err: any, res: T) => {
      if (err) {
        reject(err);
      } else {
        resolve(<T>res);
      }
    });
  });

  return result;
};

export default deleteByIdRepo;
