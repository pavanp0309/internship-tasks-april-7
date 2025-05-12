import React from 'react'

const About = () => {
  return (
    <>
      <img src={''} alt="" />
      <div className='container mt-5'>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <h1>Our Perfect Platform</h1>
            <p>Doctus omnesque duo ne, cu vel offendit erroribus. Laudem hendrerit pro ex, cum postea delectus ad. Te pro feugiat perpetua tractatos. Nam movet omnes id, usu te meis corpora. Augue doming quaestio vix at. Sumo duis ea sed, ut vix euismod lobortis prodesset, everti necessitatibus mei cu.</p>
            <p>Nam ea eripuit assueverit, invenire delicatissimi ad pro, an dicam principes duo. Paulo prodesset duo ad. Duo eu summo verear. Natum gubergren definitionem id usu, graeco cetero ius ut.</p>
            <p>Unum postea sit an, iudico invenire expetenda ei sea, atqui fierent sed ut. Ex pri numquam indoctum suavitate, sed id movet mentitum consequat, cum et amet ipsum dolor. Unum postea sit an, iudico invenire expetenda ei sea, atqui fierent sed ut.</p>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <img src="/src/assets/about-us-img1.jpg" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <h1>4M</h1>
            <p>4 million daily users</p>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <h1>12K</h1>
            <p>Over 12k open job positions</p>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <h1>10M</h1>
            <p>Over 10M stories shared</p>
          </div>
        </div>
        <h1>About Job Seeker</h1>
        <p>Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously eel valiantly petted this along across highhandedly much.</p>
        <p>Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers loosely yikes that as or eel underneath kept and slept compactly far purred sure abidingly up above fitting to strident wiped set waywardly far the and pangolin horse approving paid chuckled cassowary oh above a much opposite far much hypnotically more therefore wasp less that hey apart well like while superbly orca and far hence one.Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy.</p>
      </div>
      <div className="bg-primary d-flex flex-column justify-content-center align-items-center text-white text-center" style={{ height: '500px' }}>
        <div className="mb-4">
          <h3>Your Dream Jobs Are Waiting</h3>
          <p>Over 1 million interactions, 50,000 success stories. Make yours now.</p>
        </div>
        <div className="d-flex gap-3">
          <button className="btn btn-outline-light">Search Job</button>
          <button className="btn btn-outline-warning">Apply Job Now</button>
        </div>
      </div>
      <div className='row my-4'>
    <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
      <div className="card p-2" style={{height:"350px"}}>
       <h3>🏢 Our Story</h3>
       <p>At Job Seeker, our journey began with a simple idea: to bridge the gap between talent and opportunity. Founded by a team of career experts and technologists, we saw firsthand how job seekers struggled to find the right opportunities, and how employers struggled to find the right fit. Since then, we've built a platform that makes the job search faster, smarter, and more human. Whether you’re switching careers, hiring your first employee, or expanding your global workforce — JobConnect is here to support your growth.</p>
    </div>
    </div>
    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
      <div className="card p-2"style={{height:"350px"}}>
      <h3>🎯 Our Mission</h3>
      <p>To empower people and businesses by simplifying the job search experience.We aim to:</p>
      <ul>
        <li>Match the right talent with the right roles.</li>
        <li>Support job seekers at every step — from resume building to interviews.</li>
        <li>Support job seekers at every step — from resume building to interviews.Give employers smart tools to discover, evaluate, and hire great talent efficiently.</li>
      </ul>
      <p>Our mission is rooted in one belief: the right job can change a life.</p>
      </div>
  </div>
  <div className="col-12 col-sm-12 col-md-4 col-lg-4">
    <div className="card p-3"style={{height:"350px"}}>
      <h3>👥 Meet the Team</h3>
      <p><b>B.Sai Vijay Babu- Founder & CEO</b></p>
      <p><b>K.Dhanush- Chief Technology Officer</b></p>
      <p><b>U.Sai Siva- Head of Product</b></p>
      <p><b>M.Sumith-Manager</b></p>
    </div>
  </div>
  </div>
      <div className="how-works py-5">
  <div className="text-center mb-5">
    <h2>How It Works?</h2>
    <p className="text-muted">Job for anyone, anywhere</p>
  </div>
  <div className="container">
    <div className="row g-4">
      {/* Card 1 */}
      <div className="col-12 col-md-4">
        <div className="card h-100 shadow-sm text-center p-4 border-0">
          <img src="/src/assets/work-1.webp" alt="Resume Assessment" className="mx-auto mb-3" style={{ width: '80px', height: '80px' }} />
          <h5 className="fw-bold">Free Resume Assessments</h5>
          <p className="text-muted">Employers on average spend 31 seconds scanning resumes to identify potential matches.</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-12 col-md-4">
        <div className="card h-100 shadow-sm text-center p-4 border-0">
          <img src="/src/assets/work-2.webp" alt="Job Fit Scoring" className="mx-auto mb-3" style={{ width: '80px', height: '80px' }} />
          <h5 className="fw-bold">Job Fit Scoring</h5>
          <p className="text-muted">Quick resume reviews help identify your best matches for open positions.</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-12 col-md-4">
        <div className="card h-100 shadow-sm text-center p-4 border-0">
          <img src="/src/assets/work-3.webp" alt="Step-by-step help" className="mx-auto mb-3" style={{ width: '80px', height: '80px' }} />
          <h5 className="fw-bold">Help Every Step of the Way</h5>
          <p className="text-muted">From resume building to job placement, we guide you throughout the process.</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default About
