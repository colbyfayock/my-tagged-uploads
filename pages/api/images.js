const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export default async function handler(req, res) {
  const { tag } = JSON.parse(req.body);
  const resources = await cloudinary.api.resources_by_tag(tag);
  res.status(200).json(resources)
}
