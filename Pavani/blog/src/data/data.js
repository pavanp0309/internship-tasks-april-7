// src/data/data.js
import thumbnail1 from '../assets/images/thumbnail1.jpg';
import thumbnail2 from '../assets/images/thumbnail2.jpg';
import thumbnail3 from '../assets/images/thumbnail3.jpg';

const blogData = [
  {
    id: 1,
    image: thumbnail1,
    title: 'The Power of Now',
    snippet: 'A deep dive into mindfulness and living in the present moment by Eckhart Tolle.',
    reviewer: 'Priya Nair',
    category: 'self-help',
    tags: ['spirituality', 'mindfulness', 'self-help'],
  },
  {
    id: 2,
    image: thumbnail2,
    title: 'Atomic Habits',
    snippet: 'James Clear outlines powerful strategies to build good habits and break bad ones.',
    reviewer: 'Rahul Singh',
    category: 'productivity',
    tags: ['habits', 'productivity', 'psychology'],
  },
  {
    id: 3,
    image: thumbnail3,
    title: 'The Alchemist',
    snippet: 'A poetic novel by Paulo Coelho about pursuing your dreams and destiny.',
    reviewer: 'Sneha Verma',
    category: 'fiction',
    tags: ['fiction', 'dreams', 'inspiration'],
  },
];

export default blogData;
