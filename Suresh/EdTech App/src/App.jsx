import React from 'react';
import CourseCard from './components/CourseCard';
import NavBar from './components/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';

const courseData = [
  {
    id: '1',
    title: 'Full Stack Web Development',
    instructor: 'PavanKumar',
    duration: '12 Weeks',
    level: 'Intermediate',
    isEnrolled: true,
    rating: 4.7,
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    thumbnailUrl: img1,
    discountPrice: 4999,
    originalPrice: 8999,
  },
  {
    id: '2',
    title: 'Data Science & Machine Learning',
    instructor: 'Suneel',
    duration: '10 Weeks',
    level: 'Advanced',
    isEnrolled: false,
    rating: 4.9,
    tags: ['Python', 'Pandas', 'ML', 'SQL'],
    thumbnailUrl: img2,
    discountPrice: 5999,
    originalPrice: 9999,
  },
  {
    id: '3',
    title: 'Cloud Computing',
    instructor: 'Prakash',
    duration: '8 Weeks',
    level: 'Beginner',
    isEnrolled: false,
    rating: 4.6,
    tags: ['Security', 'Networking', 'Linux'],
    thumbnailUrl: img3,
    discountPrice: 3999,
    originalPrice: 7499,
  },
  {
    id: '4',
    title: 'DevOps & CI/CD',
    instructor: 'Mahesh',
    duration: '6 Weeks',
    level: 'Beginner',
    isEnrolled: true,
    rating: 4.5,
    tags: ['SEO', 'Ads', 'Email', 'Analytics'],
    thumbnailUrl: img4,
    discountPrice: 3499,
    originalPrice: 6999,
  },
  {
    id: '5',
    title: 'Mobile App Development',
    instructor: 'Dhanunjay',
    duration: '10 Weeks',
    level: 'Intermediate',
    isEnrolled: false,
    rating: 4.8,
    tags: ['AI', 'ML', 'TensorFlow', 'NLP'],
    thumbnailUrl: img5,
    discountPrice: 6999,
    originalPrice: 10999,
  },
  {
    id: '6',
    title: 'Blockchain Development',
    instructor: 'Anil',
    duration: '9 Weeks',
    level: 'Advanced',
    isEnrolled: true,
    rating: 4.4,
    tags: ['SAP', 'ERP', 'Business'],
    thumbnailUrl: img6,
    originalPrice: 7999,
  },
];


const shuffledCourseData = courseData.sort(() => Math.random() - 0.5);

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="container py-5">
        <h2 className="mb-4 text-center">Courses</h2>
        <div className="row">
          {shuffledCourseData.map((course) => (
            <div
              className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center"
              key={course.id}
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;