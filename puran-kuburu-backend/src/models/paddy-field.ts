import mongoose from 'mongoose';

export interface PaddyField {
  city: string;
}

const PaddyFieldSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
    trim: true
  }
});

export const PaddyFieldModel =  mongoose.model('PaddyField', PaddyFieldSchema);
