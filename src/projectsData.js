import sampleImg from './assets/proyectos/IMG-20190611-WA0046.jpg';

// Cargar imágenes del carrusel y elegir aleatoriamente para cada proyecto
const carrouselModules = import.meta.glob('./assets/carrousel/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' });
const carrouselImages = Object.values(carrouselModules);
const pickRandomImage = () => {
  if (!carrouselImages.length) return sampleImg;
  const idx = Math.floor(Math.random() * carrouselImages.length);
  return carrouselImages[idx];
};

export const projects = [
  {
    id: '1',
    title: 'Proyecto Fallero 2024',
    description: 'Monumento fallero principal de gran formato',
  image: pickRandomImage(),
    url: '#',
    tags: ['Gran Formato', 'Tradicional']
  },
  {
    id: '2',
    title: 'Falla Infantil',
    description: 'Diseño infantil con temática moderna',
  image: pickRandomImage(),
    url: '#',
    tags: ['Infantil', 'Moderno']
  },
  {
    id: '3',
    title: 'Ninot Indultat 2023',
    description: 'Figura destacada premiada',
  image: pickRandomImage(),
    url: '#',
    tags: ['Premio', 'Detallado']
  },
  {
    id: '4',
    title: 'Monumento Histórico',
    description: 'Recreación de época valenciana',
  image: pickRandomImage(),
    url: '#',
    tags: ['Histórico', 'Cultural']
  },
  {
    id: '5',
    title: 'Falla Contemporánea',
    description: 'Fusión de tradición y vanguardia',
  image: pickRandomImage(),
    url: '#',
    tags: ['Contemporáneo', 'Innovador']
  },
  {
    id: '6',
    title: 'Escena Tradicional',
    description: 'Representación de costumbres valencianas',
  image: pickRandomImage(),
    url: '#',
    tags: ['Tradicional', 'Costumbrista']
  },
  {
    id: '7',
    title: 'Proyecto Comunitario',
    description: 'Obra colaborativa con la comunidad',
  image: pickRandomImage(),
    url: '#',
    tags: ['Comunitario', 'Social']
  },
  {
    id: '8',
    title: 'Restauración Patrimonial',
    description: 'Recuperación de obra histórica',
  image: pickRandomImage(),
    url: '#',
    tags: ['Restauración', 'Patrimonio']
  }
];
