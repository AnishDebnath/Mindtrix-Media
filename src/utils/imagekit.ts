// ponytail: ImageKit helper
export const getImageKitUrl = (path: string, transformations?: string) => {
  const baseUrl = import.meta.env.VITE_IMAGEKIT_BASE_URL || '';
  if (!baseUrl) return path;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  if (!transformations) return `${baseUrl}/${cleanPath}`;
  return `${baseUrl}/tr:${transformations}/${cleanPath}`;
};
