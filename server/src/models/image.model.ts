import { model, Schema, Document } from 'mongoose';
import { Image } from '@/interfaces/image.interface';

const imageSchema: Schema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
    tags: [
      {
        type: String,
      },
    ],
    originalname: { type: String, required: true },
    path: { type: String, required: true },
    filename: { type: String, required: true },
  },
  { timestamps: true },
);

const imageModel = model<Image & Document>('Image', imageSchema);

export default imageModel;
