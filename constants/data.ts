// src/data/carouselData.ts
import { CAROUSEL_IMAGE } from "./purple-images";
export interface CarouselItem {
  id: string;
  title: string;
  subtitle?: string;
  image: string; // can be a local require(...) or remote URL
  backgroundColor?: string;
}

// ✅ 8 slides dataset (using remote URLs from Unsplash)
export const carouselData: CarouselItem[] = [
  {
    id: '1',
    title: 'Welcome to StickerSmash 🎉',
    subtitle: 'Turn your photos into fun stickers instantly!',
    image: CAROUSEL_IMAGE[0],
    backgroundColor: '#FDE68A',
  },
  {
    id: '2',
    title: 'Add Creative Text ✏️',
    subtitle: 'Customize your stickers with stylish fonts and colors.',
    image: CAROUSEL_IMAGE[1],
    backgroundColor: '#FECACA',
  },
  {
    id: '3',
    title: 'Edit and Crop 🖼️',
    subtitle: 'Crop, resize, and adjust brightness with ease.',
    image: CAROUSEL_IMAGE[2],
    backgroundColor: '#A7F3D0',
  },
  {
    id: '4',
    title: 'Add Emojis 😎',
    subtitle: 'Make your stickers fun with thousands of emojis.',
    image: CAROUSEL_IMAGE[3],
    backgroundColor: '#BFDBFE',
  },
];
