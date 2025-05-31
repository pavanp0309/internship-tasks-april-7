import { data } from "react-router"

const dummyProjects = [
  { 
    id: 1, 
    name: 'Website Redesign', 
    status: 'In Progress', 
    description: 'Redesigning the landing page for the main website.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    startDate: '2025-03-01',
    endDate: '2025-06-01',
    budget: '$10,000'
  }, 
  { 
    id: 2, 
    name: 'API Integration', 
    status: 'Pending', 
    description: 'Integrating third-party APIs for payment processing.',
    image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80',
    startDate: '2025-04-01',
    endDate: '2025-07-01',
    budget: '$5,000'
  },
  { 
    id: 3, 
    name: 'Dashboard Analytics', 
    status: 'In Review', 
    description: 'Creating advanced analytics features for the admin dashboard.',
    image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80',
    startDate: '2025-01-15',
    endDate: '2025-05-15',
    budget: '$8,000'
  },
  { 
    id: 4, 
    name: 'E-commerce Platform', 
    status: 'Completed', 
    description: 'Developed a full-featured e-commerce platform with payment gateway integration.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
    startDate: '2024-06-01',
    endDate: '2024-12-01',
    budget: '$20,000'
  },
  { 
    id: 5, 
    name: 'SEO Optimization', 
    status: 'In Progress', 
    description: 'Improving SEO for the company website to increase search engine rankings.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    startDate: '2025-02-01',
    endDate: '2025-08-01',
    budget: '$3,500'
  }
];


export default dummyProjects;
