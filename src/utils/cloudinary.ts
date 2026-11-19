export const getCloudinaryUrl = (publicId: string, options = 'f_auto,q_auto') => {
  const isVideo = publicId.endsWith('.mp4');
  const baseUrl = import.meta.env.VITE_CLOUDINARY_BASE_URL.replace(/\/image\/|\/video\//, isVideo ? '/video/' : '/image/');
  return `${baseUrl}/${options}/${publicId}`;
};
