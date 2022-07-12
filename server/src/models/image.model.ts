import { Image } from '@/interfaces/image.interface';
import { model, Schema, Document } from 'mongoose';

const imageSchema: Schema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    tags: [
      {
        type: String,
      },
    ],
    imageLink: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
);

const imageModel = model<Image & Document>('Image', imageSchema);

export default imageModel;
