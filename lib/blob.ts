import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'daf0wwgle',
  api_key: '981156549531222',
  api_secret: process.env.CLOUDINARY_API_SECRET, // You'll need to add this to your environment variables
});

/**
 * Upload a file to Cloudinary
 * @param file - The file to upload (string path, Buffer, or ReadableStream)
 * @param options - Upload options
 * @returns Promise with the uploaded file URL
 */
export async function uploadToCloudinary(
  file: string | Buffer | ReadableStream,
  options?: {
    public_id?: string;
    folder?: string;
    resource_type?: 'image' | 'video' | 'raw' | 'auto';
    transformation?: any;
    quality?: string | number;
    format?: string;
  }
) {
  try {
    const result = await cloudinary.uploader.upload(file, {
      resource_type: 'auto',
      quality: 'auto',
      ...options
    });
    return { url: result.secure_url, error: null };
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    return { url: null, error };
  }
}

/**
 * Example usage:
 * 
 * // Upload a text file
 * const { url, error } = await uploadToCloudinary('path/to/file.txt');
 * 
 * // Upload with custom options
 * const { url, error } = await uploadToCloudinary(
 *   videoBuffer, 
 *   { 
 *     resource_type: 'video',
 *     folder: 'videos',
 *     quality: 'auto',
 *     format: 'mp4'
 *   }
 * );
 */
