export type PlanetImages = keyof typeof PlanetImageFilesRecord;
export const PlanetImageFilesRecord = {
  Planet1: require('./assets/nasa-1.jpg'),
  Planet2: require('./assets/nasa-2.jpg'),
  Planet3: require('./assets/nasa-3.jpg'),
  Planet4: require('./assets/nasa-4.jpg'),
  Planet5: require('./assets/nasa-5.jpg'),
  Planet6: require('./assets/nasa-6.jpg'),
};

const IMAGES: PlanetImages[] = [
  'Planet1',
  'Planet2',
  'Planet3',
  'Planet4',
  'Planet5',
  'Planet6',
];

export const pickImageUrlRandomly = () => {
  const randomImageIndex = Math.floor(Math.random() * IMAGES.length);
  const randomImage = IMAGES.at(randomImageIndex);

  return randomImage || 'Planet1';
};
