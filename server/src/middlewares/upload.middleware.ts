import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '@/utils/cloudinary';
import { CLOUD_FOLDER } from '@/config';

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: CLOUD_FOLDER,
  },
});

const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
  }
};

const maxSize = 1024 * 1024 * 10; //10mb
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: maxSize },
});

export default upload;
