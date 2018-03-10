import { Document, Schema, Model, model } from 'mongoose';

export interface IMagic {
  title?: string;
  properties?: string;
  description?: string;
  material?: string;
}

export interface IMagicModel extends IMagic, Document { }

export const MagicSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    properties: { type: String, required: true },
    description: { type: String, required: true },
    material: { type: String, required: false }
  }
);

export const Magic: Model<IMagicModel> = model<IMagicModel>('Magic', MagicSchema);
