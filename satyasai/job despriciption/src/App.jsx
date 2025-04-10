import React from 'react'
import NavBar from './Components/NavBar'
import Card from './pages/Card'


const App = () => {
  const jobs = [
    {
      thumbnail: "https://media.licdn.com/dms/image/v2/D5612AQFSVrEIJxq_aA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1679683081898?e=2147483647&v=beta&t=jy1SUv24boZ0boUutFvP8a1cDXfXcvnHinVztXzqen4",
      id: 1,
      title: "Frontend Developer",
      company: "TechNova",
      location: "Bangalore",
      type: "Full-Time",
      salaryRange: "10-15 LPA",
      postedDate: "2025-04-05",
      isBookmarked: false,
      skillsRequired: ["React", "JavaScript", "HTML", "CSS"],
      isHotJob: true
    },
    {
      thumbnail: "https://static-assets.codecademy.com/assets/course-landing-page/meta/16x9/back-end-engineer-career-path.jpg",
      id: 2,
      title: "Backend Engineer",
      company: "CodeBase Inc.",
      location: "Remote",
      type: "Contract",
      salaryRange: "12-18 LPA",
      postedDate: "2025-03-30",
      isBookmarked: true,
      skillsRequired: ["Node.js", "Express", "MongoDB"],
      isHotJob: false
    },
    {
      thumbnail: "https://sophiacollege.ac.in/wp-content/uploads/2023/06/DevOps-Engineer.jpg",
      id: 3,
      title: "DevOps Specialist",
      company: "CloudOps",
      location: "Hyderabad",
      type: "Full-Time",
      salaryRange: "15-20 LPA",
      postedDate: "2025-04-01",
      isBookmarked: false,
      skillsRequired: ["AWS", "Docker", "Kubernetes"],
      isHotJob: true
    },
    {
      thumbnail: "https://codingbytes.com/wp-content/uploads/2022/03/full-stack-web-development.jpg",
      id: 4,
      title: "Full Stack Developer",
      company: "InnoTech",
      location: "Mumbai",
      type: "Full-Time",
      salaryRange: "14-18 LPA",
      postedDate: "2025-04-03",
      isBookmarked: true,
      skillsRequired: ["React", "Node.js", "MySQL"],
      isHotJob: false
    },
    {
      thumbnail: "https://miro.medium.com/v2/resize:fit:1400/1*Y1OLX39lJUt_CC-F7rFg4A.png",
      id: 5,
      title: "UI/UX Designer",
      company: "Designify",
      location: "Pune",
      type: "Remote",
      salaryRange: "8-12 LPA",
      postedDate: "2025-04-08",
      isBookmarked: false,
      skillsRequired: ["Figma", "Adobe XD", "User Research"],
      isHotJob: true
    },
    {
      thumbnail: "https://birokesra.babelprov.go.id/sites/default/files/images/artikel/pic%202.png",
      id: 6,
      title: "Data Scientist",
      company: "DataVision",
      location: "Chennai",
      type: "Contract",
      salaryRange: "18-25 LPA",
      postedDate: "2025-03-29",
      isBookmarked: true
    }
  ];
  
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          {jobs.map(jobs => (
            <div className="col-md-4 mb-4" key={jobs.id}>
              <Card jobs={jobs}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
