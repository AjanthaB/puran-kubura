import {Farmer, FarmerModel} from '../models/farmer';

// get all the user from database
import {Request, Response} from "express";
import {FarmerSearchModel} from "../models/farmer-search.model";

export const getFarmers = (req: Request, res: Response): any => {
  const query = FarmerModel.find({});
  query
    .lean()
    .exec()
    .then((farmers: any[]) => res.status(200)
      .json(farmers))
    .catch((err: any) => res.status(500)
      .json({error: true, message: err.message}))
}

export const searchFarmers = (req: Request, res: Response): any => {
  const searchOptions: FarmerSearchModel = req.body;

  const query = FarmerModel.find({});
  query
      .lean()
      .skip(searchOptions.pageSize * searchOptions.previousPageIndex)
      .limit(searchOptions.pageSize)
      .exec()
      .then((farmers: any[]) => res.status(200)
          .json(farmers))
      .catch((err: any) => res.status(500)
          .json({error: true, message: err.message}))
}

export const createFarmer = (req: Request, res: Response): any => {
  const farmer = new FarmerModel(req.body);
  farmer.save()
    .then(() => res.status(201).json(farmer))
    .catch((err: any) => res.status(500)
      .json({error: true, message: err.message}))
}

export const updateFarmer = (req: Request, res: Response): any => {
  FarmerModel.findOneAndUpdate(
      {_id: req.body._id},
      req.body,
    {upsert: true, new: true, runValidators: true}
    )
    .then((updatedFarmer) => res.status(201).json(updatedFarmer))
    .catch((err: any) => res.status(500)
      .json({error: true, message: err.message}))
}

export const deleteFarmer = (req: Request, res: Response): any => {
  console.log(req.params)
  FarmerModel.findOneAndRemove({_id: req.params.id})
    .then((updatedFarmer) => res.status(200).json({deleted: true}))
    .catch((err: any) => res.status(500)
      .json({error: true, message: err.message}))
}
