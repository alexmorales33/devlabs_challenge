import {Product, Province} from '../types/types';

export const Provinces: Province[] = [
  {label: 'Buenos Aires', value: 'Buenos Aires'},
  {label: 'Córdoba', value: 'Córdoba'},
  {label: 'Santa Fe', value: 'Santa Fe'},
];

export const products: Product[] = [
  {name: 'Capuccino', id: 'Capuccino'},
  {name: 'Latte', id: 'Latte'},
  {name: 'Machiato', id: 'Machiato'},
  {name: 'All', id: 'All'},
];

export const coffeeTypes = [
  {
    id: 1,
    type: 'Capuccino',
    with: 'with Chocolate',
    image: 'Coffe-1.png',
    rating: 4.8,
    opinions: 250,
    description:
      'A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk.',
    price: 4.53,
    size: ['S', 'M', 'L'],
  },
  {
    id: 2,
    type: 'Machiato',
    with: 'with Caramel',
    image: 'Coffe-2.png',
    rating: 4.5,
    opinions: 200,
    description:
      'A macchiato is an espresso coffee drink with a small amount of milk, usually foamed.',
    price: 3.99,
    size: ['S', 'M', 'L'],
  },
  {
    id: 3,
    type: 'Latte',
    with: 'with Vanilla',
    image: 'Coffe-1.png',
    rating: 4.7,
    opinions: 300,
    description:
      'A latte is a coffee drink made with espresso and steamed milk.',
    price: 5.25,
    size: ['S', 'M', 'L'],
  },
  {
    id: 4,
    type: 'Capuccino',
    with: 'with Hazelnut',
    image: 'Coffe-2.png',
    rating: 4.6,
    opinions: 180,
    description:
      'Capuccino is a concentrated coffee brewed by forcing a small amount of nearly boiling water under pressure through finely-ground coffee beans.',
    price: 3.75,
    size: ['S', 'M', 'L'],
  },
  {
    id: 5,
    type: 'Machiato',
    with: 'with Cinnamon',
    image: 'Coffe-1.png',
    rating: 4.4,
    opinions: 220,
    description:
      'An Machiato is a coffee drink prepared by diluting an espresso with hot water.',
    price: 4.0,
    size: ['S', 'M', 'L'],
  },
  {
    id: 6,
    type: 'Latte',
    with: 'with Whipped Cream',
    image: 'Coffe-2.png',
    rating: 4.9,
    opinions: 280,
    description:
      'A Latte is a coffee drink made with espresso, chocolate syrup, and steamed milk or cream.',
    price: 5.5,
    size: ['S', 'M', 'L'],
  },
];
