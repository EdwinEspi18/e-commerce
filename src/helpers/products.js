import images from '../img/fondo-body-02.svg'
import msi from '../img/msi.jpg'
import nike from '../img/nike.jpg'
import lampara from '../img/lampara.jpg'
export const productos = [
  {
    id: 1,
    images: msi || images,
    description: 'MSI GS63VR',
    price: '1000.00',
    rating: '4.5',
    cantidad: '',
  },
  {
    id: 2,
    images: nike || images,
    description: 'Nike OffWhite',
    price: '300.00',
    rating: '3.0',
    cantiad: '',
  },
  {
    id: 3,
    images: lampara || images,
    description: 'Lampara',
    price: '150.00',
    rating: '5',
    cantiad: '',
  },
]
