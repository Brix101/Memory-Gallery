import { CreateImageDto } from '@/dtos/image.dto';
import { HttpException } from '@/exceptions/HttpException';
import { Image } from '@/interfaces/image.interface';
import imageModel from '@/models/image.model';
import { isEmpty } from '@/utils/util';

class ImageService {
  public images = imageModel;

  public async findAllImage(): Promise<Image[]> {
    const images: Image[] = await this.images.find().sort({ createdAt: -1 });
    return images;
  }

  public async findImageById(imageId: string): Promise<Image> {
    if (isEmpty(imageId)) throw new HttpException(400, 'imageId is required!');

    const findImage: Image = await this.images.findOne({ _id: imageId });
    if (!findImage) throw new HttpException(404, 'Image not Found');

    return findImage;
  }

  public async createImage(imageData: CreateImageDto, file: any): Promise<Image> {
    if (isEmpty(imageData)) throw new HttpException(400, 'image Data is required!');

    const createdImageData: Image = await this.images.create({ ...imageData, ...file });

    return createdImageData;
  }

  public async updateImage(imageId: string, imageData: CreateImageDto): Promise<Image> {
    if (isEmpty(imageData)) throw new HttpException(400, 'image Data is required!');

    const updateImageById: Image = await this.images.findByIdAndUpdate(imageId, { imageData });
    if (!updateImageById) throw new HttpException(409, 'Image not Found');

    return updateImageById;
  }

  // TODO add image delete on cloudinary
  public async deleteImage(imageId: string): Promise<Image> {
    const deleteImageById: Image = await this.images.findByIdAndDelete(imageId);
    if (!deleteImageById) throw new HttpException(404, 'Image not Found');

    return deleteImageById;
  }
}

export default ImageService;
