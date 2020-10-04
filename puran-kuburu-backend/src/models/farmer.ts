import mongoose from 'mongoose';
import { AddressModel, AddressSchema } from './address';

export interface Farmer {
  name: string;
}

const FarmerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  nic: {
    type: String,
    required: true,
    trim: true
  },
  telephone: {
    type: String,
    required: true,
    trim: true
  },
  address: AddressSchema
});

export const FarmerModel =  mongoose.model('Farmer', FarmerSchema);
