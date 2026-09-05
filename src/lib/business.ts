export const BUSINESS = {
  name: 'La Aguja de Oro',
  owner: {
    name: 'Larbi El Achiri',
    yearsExperience: 30,
    yearsWithBrands: 20,
    teamSize: 120,
    role: 'Jefe de línea',
    brands: ['Zara', 'Mango', 'El Corte Inglés'],
  },
  phone: '+34 654 151 623',
  phoneRaw: '+34654151623',
  whatsapp: {
    number: '34654151623',
    url: 'https://wa.me/34654151623',
    defaultMessage: 'Hola, me gustaría consultar sobre un arreglo de ropa.',
    get urlWithMessage() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.defaultMessage)}`;
    },
  },
  address: {
    street: 'Av. San Agustín, 7',
    city: 'Avilés',
    province: 'Asturias',
    postalCode: '33401',
    country: 'España',
    countryCode: 'ES',
    get full() {
      return `${this.street}, ${this.postalCode} ${this.city}, ${this.province}, ${this.country}`;
    },
  },
  hours: {
    display: 'Lunes a Viernes: 10:00 - 13:30 y 16:30 - 20:00 | Sábados: 10:00 - 13:30',
    specification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '13:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '16:30',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '13:30',
      },
    ],
  },
  location: {
    lat: 43.5568,
    lng: -5.9247,
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Av.+San+Agustín,+7,+33401+Avilés,+Asturias',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Av.+San+Agustín,+7,+33401+Avilés,+Asturias',
    embedUrl:
      'https://maps.google.com/maps?q=Av.+San+Agust%C3%ADn,+7,+33401+Avil%C3%A9s,+Asturias&output=embed',
  },
  seo: {
    defaultTitle: 'La Aguja de Oro | Arreglos de Ropa en Avilés, Asturias',
    defaultDescription:
      'Arreglos y reparaciones de todo tipo de ropa en Avilés, Asturias. 30 años de experiencia. Bajos, cremalleras, vestidos, trajes y más. Sin cita previa.',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://laagujadeoro.es',
    ogImageUrl: '/images/tienda.jpeg',
  },
  schema: {
    type: 'ClothingStore',
    priceRange: '€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Bizum',
    description:
      'Taller artesanal especializado en arreglos y reparaciones de todo tipo de ropa en Avilés, Asturias. Con más de 30 años de experiencia, Larbi El Achiri ofrece atención personalizada y precio justo sin compromiso.',
    serviceArea: 'Avilés, Asturias, España',
  },
} as const;
