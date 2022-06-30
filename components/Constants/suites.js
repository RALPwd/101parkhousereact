import businesssuite from '../../public/images/businesssuite.png';
import familygrandsuite from '../../public/images/familygrand.png';
import suitejacuzzi from '../../public/images/suitejacuzzi.jpg';
import suiteimperial from '../../public/images/suiteimperial.png';
import executivesuite from '../../public/images/executivesuite.png';

import businessplanos from '../../public/images/business-suite(planos).png';
import businesssuite1 from '../../public/images/business-suite(1).png';
import businesssuite2 from '../../public/images/business-suite(2).png';
import businesssuite3 from '../../public/images/business-suite(3).png';
import businesssuite4 from '../../public/images/business-suite(4).png';
import businesssuite5 from '../../public/images/business-suite(5).png';
import businesssuite6 from '../../public/images/business-suite(6).jpg';

import imperialplanos from '../../public/images/suite-imperial(planos).png';
import suiteimperial1 from '../../public/images/suite-imperial(1).png';
import suiteimperial2 from '../../public/images/suite-imperial(2).png';
import suiteimperial3 from '../../public/images/suite-imperial(3).jpg';
import suiteimperial4 from '../../public/images/suite-imperial(4).jpg';
import suiteimperial5 from '../../public/images/suite-imperial(5).jpg';

import familyplanos from '../../public/images/family-grand-suite(plano).png';
import familygrand2 from '../../public/images/family-grand-suite(2).png';
import familygrand3 from '../../public/images/family-grand-suite(3).png';
import familygrand5 from '../../public/images/family-grand-suite(5).jpg';
import familygrand6 from '../../public/images/family-grand-suite(6).jpg';
import familygrand7 from '../../public/images/family-grand-suite(7).jpg';

import suitejacuzzi1 from '../../public/images/suite-jacuzzi(1).jpg';
import suitejacuzzi2 from '../../public/images/suite-jacuzzi(2).jpg';
import suitejacuzzi3 from '../../public/images/family-grand-suite(4).jpg';

import executiveplano from '../../public/images/executive-suite(plano).png';
import executivesuite1 from '../../public/images/executive-suite(1).png';
import executivesuite2 from '../../public/images/executive-suite(2).png';
import executivesuite3 from '../../public/images/executive-suite(3).png';
import executivesuite4 from '../../public/images/executive-suite(4).png';
import executivesuite5 from '../../public/images/executive-suite(5).png';

export const suites = [
  {
    id: '1',
    name: 'Business Suite',
    img: businesssuite,
    description: ['Habitación con cama king size', 'Balcón, chimenea, cocina', 'Comedor', 'Sala de estar', 'Escritorio', 'Cocina'],
    size: '61 m²',
    maxCapacity: '3 personas',
    images: [
      {
        id: '1',
        img: businessplanos,
        alt: 'Planos de la Business Suite',
      },
      {
        id: '2',
        img: businesssuite1,
        alt: 'Business Suite',
      },
      {
        id: '3',
        img: businesssuite2,
        alt: 'Business Suite',
      },
      {
        id: '4',
        img: businesssuite3,
        alt: 'Business Suite',
      },
      {
        id: '5',
        img: businesssuite4,
        alt: 'Business Suite',
      },
      {
        id: '6',
        img: businesssuite5,
        alt: 'Business Suite',
      },
      {
        id: '7',
        img: businesssuite6,
        alt: 'Business Suite',
      }
    ]
  },
  {
    id: '2',
    name: 'Family Grand Suite',
    img: familygrandsuite,
    description: ['Habitación con cama king size', 'Habitación auxiliar con cama doble o dos camas sencillas', 'Chimenea', 'Sala, comedor y cocina', '3 TV LCD FHD 42"'],
    size: '78 m²',
    maxCapacity: '5 personas',
    images: [
      {
        id: '1',
        img: familyplanos,
        alt: 'Planos de la suite imperial'
      },
      {
        id: '2',
        img: familygrand2,
        alt: 'Family grand suite'
      },
      {
        id: '3',
        img: familygrand3,
        alt: 'Family grand suite'
      },
      {
        id: '4',
        img: familygrand5,
        alt: 'Family grand suite'
      },
      {
        id: '5',
        img: familygrand6,
        alt: 'Family grand suite'
      },
      {
        id: '6',
        img: familygrand7,
        alt: 'Family grand suite'
      }
    ],
  },
  {
    id: '3',
    name: 'Suite Jacuzzi',
    img: suitejacuzzi,
    description: ['2 balcones', 'Chimenea dentro de la habitación', 'Jacuzzi doble', 'Sala', 'Comedor', 'Cocina', 'Aire acondicionado', '2 TV LCD 47"', 'Cama king y sofa cama'],
    size: '41 m²',
    maxCapacity: '3 personas',
    images: [
      {
        id: '1',
        img: suitejacuzzi1, 
        alt: 'Suite Jacuzzi'
      },    
      {
        id: '2',
        img: suitejacuzzi2,
        alt: 'Suite Jacuzzi'
      },
      {
        id: '3',
        img: suitejacuzzi3,
        alt: 'Suite Jacuzzi'
      }
    ],
  },
  {
    id: '4',
    name: 'Suite Imperial',
    img: suiteimperial,
    description: ['1 habitación principal con cama king size', '1 habitación auxiliar con 2 camas semidobles', '1 baño con ducha', '1 baño con jacuzzi', '2 balcones - 2 chimeneas - comedor', 'Sala de estar', '3 TV LCD', 'Cocina'],
    size: '93 m²',
    maxCapacity: '6 personas',
    images: [
      {
        id: '1',
        img: imperialplanos,
        alt: 'Planos de la suite imperial'
      },
      {
        id: '2',
        img: suiteimperial1,
        alt: 'Suite imperial'
      },
      {
        id: '3',
        img: suiteimperial2,
        alt: 'Suite imperial'
      },
      {
        id: '4',
        img: suiteimperial3,
        alt: 'Suite imperial'
      },
      {
        id: '5',
        img: suiteimperial4,
        alt: 'Suite imperial'
      },
      {
        id: '6',
        img: suiteimperial5,
        alt: 'Suite imperial'
      }
    ],
  },
  {
    id: '5',
    name: 'Executive Suite',
    img: executivesuite,
    description: ['Cama king size', 'Cocina', 'Escritorio', 'Chimenea', 'Mueble giratorio', 'Comedor auxiliar', 'Sala de estar'],
    size: '54 m²',
    maxCapacity: '2 personas',
    images: [
      {
        id: '1',
        img: executiveplano,
        alt: 'Planos executive suite'
      },
      {
        id: '2',
        img: executivesuite1,
        alt: 'Executive Suite'
      },
      {
        id: '3',
        img: executivesuite2,
        alt: 'Executive Suite'
      },
      {
        id: '4',
        img: executivesuite3,
        alt: 'Executive Suite'
      },
      {
        id: '5',
        img: executivesuite4,
        alt: 'Executive Suite'
      },
      {
        id: '6',
        img: executivesuite5,
        alt: 'Executive Suite'
      }
    ],
  }
]