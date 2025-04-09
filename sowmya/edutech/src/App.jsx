import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='container m-4'>
        <div className='row'> 
          {/* java */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex mb-4">
            <Card 
            className="profile-card mx-3"
            imageURL="./src/assets/java.jpg"
            title="Full-Stack Java"
            instructor="Pavan Kumar"
            duration="3h"
            level="High"
            rating="5/5"
            price={30000}
            discountPrice={35000}
            tags={['React', 'java', 'SQL']}
            isEnrolled={true}
            />
          </div>
          {/* data science */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex mb-4">
            <Card 
            className="profile-card mx-3"
            imageURL="./src/assets/data science.jpg"
            title="Data science"
            instructor="Dhanunjay"
            duration="3h 3min"
            level="Intermediate"
            rating="4.5/5"
            price={25000}
            tags={['Python', 'Apache Hadoop', 'SQL']}
            isEnrolled={false}
            />
          </div>
          {/* cyber security */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex mb-4">
            <Card 
            className="profile-card mx-3"
            imageURL="./src/assets/cyber security.jpg"
            title="Cyber security"
            instructor="Madhav Reddy"
            duration="4h"
            level="High"
            rating="4.25/5"
            price={40000}
            discountPrice={45000}
            tags={['Python', 'c', 'Java', 'c++']}
            isEnrolled={true}
            />
          </div>
          {/* artificial intellegence */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex mb-4">
            <Card 
            className="profile-card mx-3"
            imageURL="./src/assets/ai.jpg"
            title="Artificial Intelligence"
            instructor="Mahesh"
            duration="2h"
            level="High"
            rating="3.5/5"
            price={10000}
            discountPrice={15000}
            tags={['ML', 'NLP', 'DL']}
            isEnrolled={false}
            />
          </div>
          {/* SAP */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex mb-4">
            <Card 
            className="profile-card mx-3"
            imageURL="./src/assets/sap.jpg"
            title="SAP"
            instructor="suneel"
            duration="1h 30min"
            level="Low"
            rating="2.5/5"
            price={15000}
            tags={[ "cloud ERP", "business intelligence", "human capital management"]}
            isEnrolled={false}
            />
          </div>
          {/* Devops */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex mb-4">
            <Card 
            className="profile-card mx-3"
            imageURL="./src/assets/devops.png"
            title="Devops"
            instructor="sathya"
            duration="2h"
            level="High"
            rating="3.5/5"
            discountPrice={40000}
            price={35000}
            tags={['Jenkins', 'Kubernetes', 'Bamboo']}
            isEnrolled={true}
            />
          </div>
          {/* digital marketing */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex mb-4">
            <Card 
            className="profile-card mx-3"
            imageURL="./src/assets/digital marketing.jpg"
            title="Full-Stack Java"
            instructor="Sruthi"
            duration="1h 30min"
            level="High"
            rating="3.0/5"
            price={15000}
            tags={['SEO', 'Email Marketing', 'Social media Marketing']}
            isEnrolled={false}
            />
          </div>
          {/* cloud computing */}
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex mb-4">
            <Card 
            className="profile-card mx-3"
            imageURL="./src/assets/cloudcomputing.jpg"
            title="cloud computing"
            instructor="Arjun"
            duration="3h"
            level="High"
            rating="4.0/5"
            price={30000}
            discountPrice={23000}
            tags={['saas', 'paas', 'iaas']}
            isEnrolled={true}
            />
          </div>
        </div>      
    </div>
    </div>
    
  )
}

export default App
