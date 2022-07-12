import { Router } from 'express';
import { Routes } from '@/interfaces/routes.interface';
import ImageContoller from '@/controllers/image.contoller';
import upload from '@/middlewares/upload.middleware';

class ImageRoute implements Routes {
  public path = '/';
  public router = Router();
  public imageController = new ImageContoller();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}images`, this.imageController.getImages);
    this.router.post(`${this.path}images`, [upload.array('image', 10)], this.imageController.addImage);
  }
}

export default ImageRoute;
