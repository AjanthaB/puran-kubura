import {Request, Response} from "express";
import {PaddyFieldModel} from '../models/paddy-field';

export const getPaddyFields = (req: Request, res: Response): any => {
  const query = PaddyFieldModel.find({});
  query
    .lean()
    .exec()
    .then((paddies: any[]) => res.status(200)
      .json(paddies))
    .catch((err: any) => res.status(500)
      .json({error: true, message: err.message}))
}

export const createPaddyField = (req: Request, res: Response): any => {
  const paddy = new PaddyFieldModel(req.body);
  paddy.save()
    .then(() => res.status(201).json(paddy))
    .catch((err: any) => res.status(500)
      .json({error: true, message: err.message}))
}
