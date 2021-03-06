export const pickImageUrlRandomly = () => {
  const randomImageIndex = Math.floor(Math.random() * IMAGES_URL.length);
  const randomImage = IMAGES_URL.at(randomImageIndex);

  return randomImage || DEFAULT_IMAGE_URL;
};

const IMAGES_URL = [
  'https://images.ferryhopper.com/locations/Skiathos.jpg',
  'https://images.ferryhopper.com/locations/Santorini.jpg',
  'https://images.ferryhopper.com/locations/Naxos.jpg',
  'https://images.ferryhopper.com/locations/Ios.jpg',
  'https://images.ferryhopper.com/locations/Santorini.jpg',
];
const DEFAULT_IMAGE_URL =
  'https://images.ferryhopper.com/locations/Skiathos.jpg';
