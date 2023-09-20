import * as dotenv from 'dotenv';
import * as a from 'cloudinary';
dotenv.config();

const cloudinary = a.v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export { cloudinary };
