import type { ServiceCategory } from '@/types';

export const SERVICES: ServiceCategory[] = [
  {
    id: 'pantalones',
    title: 'Arreglos de Pantalones',
    slug: 'arreglos-de-pantalones',
    description: 'Arreglo de bajos (originales, con vuelta o invisibles), entalle de cintura y pierna, cambio de cremalleras y zurcido de vaqueros en Avilés.',
    icon: '👖',
    examples: ['Bajo original de vaquero', 'Entalle de cintura y caderas', 'Cambio de cremallera de pantalón', 'Arreglo de tiro y pernera', 'Bajo invisible de vestir'],
  },
  {
    id: 'vestidos',
    title: 'Arreglos de Vestidos',
    slug: 'arreglos-de-vestidos',
    description: 'Ajuste a medida, entallado lateral, subida de dobladillo y modificaciones en vestidos de fiesta, ceremonia, novias y prendas delicadas.',
    icon: '👗',
    examples: ['Entalle lateral y pecho', 'Subida de dobladillo en vestidos', 'Ajuste de tirantes y escote', 'Vestidos de fiesta y boda', 'Prendas de seda y gasa'],
  },
  {
    id: 'chaquetas-abrigos',
    title: 'Chaquetas y Abrigos',
    slug: 'arreglos-de-chaquetas-y-abrigos',
    description: 'Arreglos de sastrería en americanas, trajes, cazadoras y abrigos: acortado de mangas con botones, entalle de cuerpo y forros interiores.',
    icon: '🧥',
    examples: ['Acortado de mangas de chaqueta', 'Entalle de cuerpo y costados', 'Reparación y cambio de forros', 'Cambio de botones y ojales', 'Ajuste de hombros y hombreras'],
  },
  {
    id: 'cremalleras',
    title: 'Cambio de Cremalleras',
    slug: 'cambio-de-cremalleras',
    description: 'Sustitución y reparación rápida de cremalleras metálicas, de espiral, invisibles y reforzadas en pantalones, cazadoras, abrigos y bolsos.',
    icon: '🪡',
    examples: ['Cremallera de pantalón vaquero', 'Cremallera de chaqueta y plumífero', 'Cremalleras invisibles en vestidos', 'Cremallera doble sentido', 'Reparación de cursor y tirador'],
  },
  {
    id: 'reparaciones',
    title: 'Reparación de Ropa',
    slug: 'reparacion-de-ropa',
    description: 'Reparación experta de desgarros, agujeros, costuras abiertas, coderas, parches y refuerzos en prendas desgastadas o dañadas.',
    icon: '🧵',
    examples: ['Costuras abiertas o rotas', 'Zurcido invisible de roturas', 'Refuerzo de entrepierna y codos', 'Colocación de coderas', 'Reparaciones delicadas'],
  },
  {
    id: 'otros',
    title: 'Otros Arreglos y Confección',
    slug: 'arreglos-de-ropa',
    description: 'Modificaciones en camisas, faldas, trajes completos, ropa de trabajo, cortinas y ropa de hogar en Avilés.',
    icon: '✂️',
    examples: ['Acortar mangas de camisa', 'Entalle y bajo de faldas', 'Arreglo de trajes de sastre', 'Ajuste de ropa deportiva', 'Arreglos de ropa de hogar'],
  },
];
