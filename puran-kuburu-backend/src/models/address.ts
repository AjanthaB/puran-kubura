import mongoose from 'mongoose';

export interface Address {
  province: string;
  district: string;
  city: string;
  village: string;
  addressLine: string;
}

export const AddressSchema = new mongoose.Schema({
  province: {
    type: String,
    required: true,
    trim: true
  },
  district: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  village: {
    type: String,
    required: true,
    trim: true
  },
  addressLine: {
    type: String,
    required: true,
    trim: true
  }
});

export const AddressModel =  mongoose.model('Address', AddressSchema);