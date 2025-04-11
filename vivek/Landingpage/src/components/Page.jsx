import React from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.css'

const Page = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold mb-4">Transform Your Workflow</h1>
          <p className="lead mb-4">
            The all-in-one platform that helps your team work smarter, not harder.
          </p>
          <button className="btn btn-light btn-lg text-primary fw-bold px-4 py-2">
            Get Started Free
          </button>
        </div>
      </section>

      {/* Features Grid with Icons */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Powerful Features</h2>
          <div className="row g-4">
            {/* Feature 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 p-4">
                <div className="text-primary fs-1 mb-3">
                  <i className="bi bi-lightning-charge-fill"></i>
                </div>
                <img src="./src/assets/fast.png" className="rounded-circle png  " width="70" />
                <h3 className="h4">Lightning Fast</h3>
                <p className="text-muted">
                  Our platform delivers unmatched performance with sub-second response times.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 p-4">
                <div className="text-primary fs-1 mb-3">
                  <i className="bi bi-shield-lock-fill"></i>
                </div>
                <img src="./src/assets/2.png" className="rounded-circle png  " width="60" />
                <h3 className="h4">Enterprise Security</h3>
                <p className="text-muted">
                  Military-grade encryption keeps your data safe at all times.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 p-4">
                <div className="text-primary fs-1 mb-3">
                  <i className="bi bi-plug-fill"></i>
                </div>
                <img src="./src/assets/3.webp" className=" png  " width="50" />
                <h3 className="h4">Seamless Integration</h3>
                <p className="text-muted">
                  Connect with all your favorite tools in just a few clicks.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 p-4">
                <div className="text-primary fs-1 mb-3">
                  <i className="bi bi-bar-chart-line-fill"></i>
                </div>
                <img src="./src/assets/5.png" className=" png  " width="50" />
                <h3 className="h4">Advanced Analytics</h3>
                <p className="text-muted">
                  Get actionable insights with our powerful reporting dashboard.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 p-4">
                <div className="text-primary fs-1 mb-3">
                  <i className="bi bi-people-fill"></i>
                </div>
                <img src="./src/assets/6.png" className="rounded-circle png  " width="60" />
                <h3 className="h4">Team Collaboration</h3>
                <p className="text-muted">
                  Work together in real-time with built-in collaboration tools.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 p-4">
                <div className="text-primary fs-1 mb-3">
                  <i className="bi bi-headset"></i>
                </div>
                <img src="./src/assets/8.png" className="rounded-circle png  " width="50" />
                <h3 className="h4">24/7 Support</h3>
                <p className="text-muted">
                  Our expert team is always available to help you succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">What Our Customers Say</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card p-4 text-center">
                <div className="card-body">
                  <blockquote className="blockquote mb-4">
                    <p className="fs-4">
                      "This product has completely transformed how our team works. We've seen a 200%
                      increase in productivity since we started using it."
                    </p>
                  </blockquote>
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src="https://randomuser.me/api/portraits/women/32.jpg"
                      alt="Customer"
                      className="rounded-circle me-3"
                      width="60"
                    />
                    <div>
                      <h5 className="mb-0">Sarah Johnson</h5>
                      <p className="text-muted mb-0">CEO, TechCorp</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h3 className="h4 mb-3">Ready to get started?</h3>
              <p className="mb-4">Sign up for our newsletter to receive product updates.</p>
              <form className="d-flex">
                <input
                  type="email"
                  className="form-control me-2"
                  placeholder="Enter your email"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="col-lg-6 text-lg-end">
              <h3 className="h4 mb-3">Connect with us</h3>
              <div className="d-flex justify-content-lg-end gap-3">
                <a href="#" className="text-white fs-4">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-white fs-4">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-white fs-4">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="text-white fs-4">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
         
        </div>
      </footer>
    </div>
  )
}

export default Page
