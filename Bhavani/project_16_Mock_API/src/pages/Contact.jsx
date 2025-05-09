import React from "react";
import contactImg from "../assets/contact.jpg";
import officeImg from "../assets/c1.jpg"; 

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5 hero-section" style={{ backgroundImage: `url(${officeImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="bg-dark bg-opacity-50 py-5">
          <h1 className="fw-bold hero-title">Get in Touch with TechFlow</h1>
          <p className="lead hero-subtitle">Your career journey starts with a conversation. Let’s connect!</p>
        </div>
      </div>

      <div className="container my-5">
        {/* Contact Form + Image */}
        <div className="row g-4 align-items-center">
          <div className="col-md-6">
            <img src={contactImg} alt="Contact TechFlow" className="img-fluid rounded shadow animated-img" />
          </div>
          <div className="col-md-6">
            <h3 className="mb-4">Send Us a Message</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control form-control-lg shadow-sm" id="name" placeholder="John Doe" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input type="email" className="form-control form-control-lg shadow-sm" id="email" placeholder="john@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" className="form-control form-control-lg shadow-sm" id="subject" placeholder="Hiring inquiry / Support / Feedback" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control form-control-lg shadow-sm" id="message" rows="5" placeholder="Write your message here..."></textarea>
              </div>
              <button className="btn btn-primary w-100 animated-btn" type="submit">Submit</button>
            </form>
          </div>
        </div>

        {/* Company Info */}
        <div className="row mt-5">
          <div className="col-md-6">
            <h4 className="mb-3">Our Headquarters</h4>
            <p className="company-info">
              <i className="bi bi-geo-alt-fill me-2"></i>
              123 Innovation Park, Silicon Valley, CA 90210
            </p>
            <p className="company-info">
              <i className="bi bi-envelope-fill me-2"></i>
              contact@techflow.com
            </p>
            <p className="company-info">
              <i className="bi bi-telephone-fill me-2"></i>
              +1 (123) 456-7890
            </p>
            <p className="company-info">
              <i className="bi bi-clock-fill me-2"></i>
              Mon – Fri: 9 AM to 6 PM
            </p>
          </div>

          <div className="col-md-6">
            <h4 className="mb-3">Why Contact Us?</h4>
            <ul className="contact-list">
              <li><strong>Job Seekers:</strong> Get support with applications, profiles, and career advice.</li>
              <li><strong>Employers:</strong> Learn about job posting, talent acquisition, and tech partnerships.</li>
              <li><strong>Press & Media:</strong> Reach our PR team for interviews and coverage.</li>
              <li><strong>Feedback:</strong> Tell us how we can improve your TechFlow experience.</li>
            </ul>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-5">
          <h4 className="mb-3">Find Us</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.774244185733!2d-122.08424938468148!3d37.421999779825435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbbd5b9fbd107%3A0x24fbe4c257034712!2sGoogleplex!5e0!3m2!1sen!2sus!4v1625575176141!5m2!1sen!2sus"
            width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
        </div>

        {/* FAQ */}
        <div className="mt-5">
          <h3 className="text-center mb-4">Frequently Asked Questions</h3>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                  How long does it take to get a response?
                </button>
              </h2>
              <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  We usually respond within 24-48 business hours. For urgent requests, call us directly.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faqTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                  Do I need an account to contact support?
                </button>
              </h2>
              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  No, you can send general inquiries without an account. But logging in helps us serve you better.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faqThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                  How can I apply for a job at TechFlow?
                </button>
              </h2>
              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Visit our <a href="/jobs" className="text-primary hover-link">Find a job</a> page, browse through available positions, and submit your application.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faqFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                  Can I request a demo of your platform?
                </button>
              </h2>
              <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Yes! Please fill out the contact form above, and our sales team will get in touch with you to arrange a demo.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="faqFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                  What should I include in my job application?
                </button>
              </h2>
              <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Include your updated resume, a cover letter explaining why you're a good fit for the role, and any relevant portfolio links.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
