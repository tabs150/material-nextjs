import macbook from '../public/images/macbook-pro.jpg';
import macbookAir from '../public/images/macbook-air.jpeg';
import iphone from '../public/images/iphone-cat.jpg';
// import iphone6s from '../public/images/iphone6s.jpg';
// import iphoneX from '../public/images/iphone-x.jfif';
import airpods from '../public/images/airpods.jpeg';
import earpods from '../public/images/homeoffice.jpg';
import ipadAir from '../public/images/ipad-air.jpg';
import ipad2 from '../public/images/ipad2.jpeg';
import imac from '../public/images/imac-back.jpg';
import wlCharger from '../public/images/iphone6.jpeg';
import kbdCombo from '../public/images/imac-keyboard-combo.jpg';

export const products = [
  {
    id: 1,
    name: 'iPhone 6',
    brand: 'Apple',
    model: 'iPhone 6',
    category: ['all', 'iphone', 'store'],
    type: 'smart-phone',
    price: 399,
    qty: 0,
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: iphone,
    imageText: 'Image Text',
    rating: 4,
    bgColor: '#FF6875',
    color: '#ffffff',
  },
  {
    id: 2,
    name: 'MacBook Pro',
    brand: 'Apple',
    model: 'MacBook Pro 4',
    category: ['all', 'macbook', 'store'],
    type: 'macbook',
    price: 349,
    qty: 0,
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: macbookAir,
    imageText: 'Image Text',
    rating: 3,
    bgColor: '#F6F7F8',
    color: 'inherit',
  },
  {
    id: 3,
    name: 'Airpods 2',
    brand: 'Apple',
    model: 'Airpods 3',
    category: ['all', 'accessories'],
    type: 'earphones',
    price: 29,
    qty: 0,
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: airpods,
    imageText: 'Image Text',
    rating: 1,
    bgColor: '#C1C8CE',
    color: 'inherit',
  },
  {
    id: 4,
    name: 'iPhone 6s',
    brand: 'Apple',
    model: 'iPhone 6',
    category: ['all', 'iphone', 'store'],
    type: 'smart-phone',
    price: 399,
    qty: 0,
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: iphone,
    imageText: 'Image Text',
    rating: 4,
    bgColor: '#FF6875',
    color: '#ffffff',
  },
  {
    id: 5,
    name: 'MacBook Pro 11',
    brand: 'Apple',
    model: 'MacBook Pro 11',
    category: ['all', 'macbook', 'store'],
    type: 'macbook',
    price: 349,
    qty: 0,
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: macbook,
    imageText: 'Image Text',
    rating: 3,
    bgColor: '#F6F7F8',
    color: 'inherit',
  },
  {
    id: 6,
    name: 'Earpods',
    brand: 'Apple',
    model: 'Airpods 3',
    category: ['all', 'accessories'],
    type: 'earphones',
    price: 29,
    qty: 0,
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: earpods,
    imageText: 'Image Text',
    rating: 4,
    bgColor: '#C1C8CE',
    color: 'inherit',
  },
  {
    id: 7,
    name: 'iPhone X',
    brand: 'Apple',
    model: 'iPhone X',
    category: ['all', 'iphone', 'store'],
    type: 'smart-phone',
    price: 399,
    qty: 0,
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: iphone,
    imageText: 'Image Text',
    rating: 4,
    bgColor: '#FF6875',
    color: '#ffffff',
  },
  {
    id: 8,
    name: 'Ipad Air',
    brand: 'Apple',
    model: 'Ipad Pro 4',
    category: ['all', 'ipad', 'store'],
    type: 'ipad',
    price: 349,
    qty: 0,
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: ipadAir,
    imageText: 'Image Text',
    rating: 5,
    bgColor: '#F6F7F8',
    color: 'inherit',
  },
  {
    id: 9,
    name: 'Wireless Charger',
    brand: 'Apple',
    model: 'Airpods 3',
    category: ['all', 'accessories'],
    type: 'wireless charger',
    price: 29,
    qty: 0,
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: wlCharger,
    imageText: 'Image Text',
    rating: 3,
    bgColor: '#C1C8CE',
    color: 'inherit',
  },
  {
    id: 10,
    name: 'iPad X',
    brand: 'Apple',
    model: 'iPad 6',
    category: ['all', 'ipad', 'store'],
    type: 'smart-phone',
    price: 399,
    qty: 0,
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: ipad2,
    imageText: 'Image Text',
    rating: 2,
    bgColor: '#FF6875',
    color: '#ffffff',
  },
  {
    id: 11,
    name: 'iMac',
    brand: 'Apple',
    model: 'iMac Pro',
    category: ['all', 'macbook', 'store'],
    type: 'macbook',
    price: 399,
    qty: 0,
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: imac,
    imageText: 'Image Text',
    rating: 5,
    bgColor: '#F6F7F8',
    color: 'inherit',
  },
  {
    id: 12,
    name: 'Keyboard Combo',
    brand: 'Apple',
    model: 'Airpods 3',
    category: ['all', 'accessories'],
    type: 'keyboard',
    price: 229,
    qty: 0,
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: kbdCombo,
    imageText: 'Image Text',
    rating: 3,
    bgColor: '#C1C8CE',
    color: 'inherit',
  },
];

export const sections = [
  { title: 'Home', url: '#' },
  { title: 'Store', url: '#' },
  { title: 'IPhone', url: '#' },
  { title: 'IPad', url: '#' },
  { title: 'Macbook', url: '#' },
  { title: 'Accessories', url: '#' },
];
