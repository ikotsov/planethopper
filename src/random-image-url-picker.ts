const IMAGES_URL = [
  'https://images.ferryhopper.com/locations/Skiathos.jpg',
  'https://images.ferryhopper.com/locations/Santorini.jpg',
  'https://images.ferryhopper.com/locations/Naxos.jpg',
];
const DEFAULT_IMAGE_URL =
  'https://images.ferryhopper.com/locations/Skiathos.jpg';

export const pickImageUrlRandomly = () => {
  const randomImageIndex = Math.floor(Math.random() * IMAGES_URL.length);
  const randomImage = IMAGES_URL.at(randomImageIndex);

  return randomImage || DEFAULT_IMAGE_URL;
};
