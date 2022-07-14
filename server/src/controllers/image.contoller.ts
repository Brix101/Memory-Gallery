import { CreateImageDto } from '@/dtos/image.dto';
import { Image } from '@/interfaces/image.interface';
import ImageService from '@/services/image.service';
import { NextFunction, Request, Response } from 'express';

class ImageContoller {
  public imageService = new ImageService();

  public getImages = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllImagesData: Image[] = await this.imageService.findAllImage();

      res.status(200).json(findAllImagesData);
    } catch (error) {
      next(error);
    }
  };

  public addImage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const files = req.files;
      const imageData: CreateImageDto = req.body;

      const data: Image[] = [];

      for (const file in files) {
        const createImageData: Image = await this.imageService.createImage({ ...imageData }, files[file]);

        data.push(createImageData);
      }

      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  };

  public updateImage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const imageId: string = req.params.id;
      const imageData: CreateImageDto = req.body;
      const updateImageData: Image = await this.imageService.updateImage(imageId, imageData);

      res.status(200).json(updateImageData);
    } catch (error) {
      next(error);
    }
  };

  public deleteImage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const imageId: string = req.params.id;
      const deleteImageData: Image = await this.imageService.deleteImage(imageId);

      res.status(200).json(deleteImageData);
    } catch (error) {
      next(error);
    }
  };
}

export default ImageContoller;
