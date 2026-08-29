import type { ServiceCategory } from '@/types';

export const SERVICES: ServiceCategory[] = [
  {
    id: 'pantalones',
    title: 'Pantalones',
    slug: 'arreglos-de-pantalones',
    description: 'Arreglo de bajos, entalle, cambio de cremallera y reparaciones en todo tipo de pantalones.',
    icon: '👖',
    examples: ['Bajos de pantalón', 'Entalle de cintura', 'Reparación de cremallera', 'Costuras rotas', 'Cambio de bolsillos'],
  },
  {
    id: 'vestidos',
    title: 'Vestidos',
    slug: 'arreglos-de-vestidos',
    description: 'Ajustes, entalle, acortado y reparaciones en vestidos de todo tipo, incluyendo prendas delicadas.',
    icon: '👗',
    examples: ['Acortado de vestidos', 'Entalle lateral', 'Ajuste de tirantes', 'Reparación de escote', 'Vestidos de novia y ceremonia'],
  },
  {
    id: 'chaquetas-abrigos',
    title: 'Chaquetas y Abrigos',
    slug: 'arreglos-de-chaquetas-y-abrigos',
    description: 'Arreglos y modificaciones en chaquetas, americanas, abrigos y trajes de todo tipo.',
    icon: '🧥',
    examples: ['Acortado de mangas', 'Entalle de abrigos', 'Reparación de forros', 'Cambio de botones', 'Ajuste de hombros'],
  },
  {
    id: 'cremalleras',
    title: 'Cambio de Cremalleras',
    slug: 'cambio-de-cremalleras',
    description: 'Sustitución de cremalleras en todo tipo de prendas: pantalones, chaquetas, bolsos y más.',
    icon: '🪡',
    examples: ['Cremalleras de pantalón', 'Cremalleras de abrigo', 'Cremalleras invisibles', 'Cremalleras de bolso', 'Reparación de cierre'],
  },
  {
    id: 'reparaciones',
    title: 'Reparaciones',
    slug: 'reparacion-de-ropa',
    description: 'Reparación de costuras, agujeros, desgarros y cualquier tipo de daño en tus prendas.',
    icon: '🧵',
    examples: ['Costuras abiertas', 'Agujeros y desgarros', 'Reparación de forros', 'Costuras reforzadas', 'Reparaciones delicadas'],
  },
  {
    id: 'otros',
    title: 'Otros Arreglos',
    slug: 'arreglos-de-ropa',
    description: 'Camisas, faldas, jeans, trajes, ropa deportiva, prendas delicadas y cualquier tipo de modificación.',
    icon: '✂️',
    examples: ['Arreglo de camisas', 'Ajuste de faldas', 'Arreglo de jeans', 'Trajes a medida', 'Botones y cierres'],
  },
];
