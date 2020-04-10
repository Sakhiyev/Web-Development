import { Bear } from './bear';

export const BEARS: Bear[] = [
  {
    id: 21,
    title: 'Kotletki s pyurewkoi',
    description: 'best of bests',      
    likes: 0,
    comments: [],    
    images: ['kotletka1.png', 'kotletka2.png'],
    category: {id: 11, name: 'Beef'}
  },
  {
    id: 22,
    title: 'Uchpuchmak',
    description: 'with love from Tatarstan',
    likes: 0,
    comments: [],
    images: ['uchpuchmak1.png', 'Uchpuchmak2.png'],
    category: {id: 11, name: 'Beef'}
  },
  {
    id: 23,
    title: 'Beshbarmak',
    description: 'with love from Kazakhstan',
    likes: 0,
    comments: [],
    images: ['beshbarmak1.png', 'beshbarmak2.png'],
    category: {id: 4, name: 'Dinner'}
  }
]
