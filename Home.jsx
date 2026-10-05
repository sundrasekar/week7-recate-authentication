import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero-modern">

        <div className="hero-content">
          <div className="hero-badge">
            🚀 Start Your Career Journey
          </div>

          <h1>
            Find Your
            <span> Dream Internship</span>
          </h1>

          <p>
            Discover internships, develop real-world skills,
            and take the next step toward your dream career.
          </p>

          <div className="hero-actions">
            <Link to="/jobs" className="primary-btn">
              Explore Opportunities →
            </Link>

            <Link to="/contact" className="secondary-btn">
              Contact Us
            </Link>
          </div>

          <div className="hero-trust">
            <span>✓ Verified Opportunities</span>
            <span>✓ Student Friendly</span>
            <span>✓ Career Focused</span>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero-visual">
          <div className="visual-card main-card">
            <div className="visual-icon">💼</div>

            <h3>Frontend Developer</h3>

            <p>DG Interns Hub</p>

            <div className="visual-tags">
              <span>React</span>
              <span>JavaScript</span>
            </div>

            <div className="visual-bottom">
              <span>📍 Remote</span>
              <span>Apply →</span>
            </div>
          </div>

          <div className="floating-card floating-one">
            <strong>500+</strong>
            <small>Opportunities</small>
          </div>

          <div className="floating-card floating-two">
            ⭐
            <strong>4.9/5</strong>
            <small>Student Rating</small>
          </div>
        </div>

      </section>

      {/* Stats */}
      <section className="stats-section">

        <div className="stat">
          <h2>500+</h2>
          <p>Internships</p>
        </div>

        <div className="stat">
          <h2>100+</h2>
          <p>Companies</p>
        </div>

        <div className="stat">
          <h2>2K+</h2>
          <p>Students</p>
        </div>

        <div className="stat">
          <h2>50+</h2>
          <p>Skills</p>
        </div>

      </section>

      {/* Features */}
      <section className="features-modern">

        <div className="section-heading">
          <span>WHY DG INTERNS HUB</span>

          <h2>
            Everything you need to
            <br />
            start your career
          </h2>

          <p>
            Find opportunities, build your skills and
            gain valuable industry experience.
          </p>
        </div>

        <div className="feature-grid">

          <div className="modern-feature">
            <div className="feature-icon blue">🔎</div>
            <h3>Find Opportunities</h3>
            <p>
              Discover internship opportunities based on
              your skills and interests.
            </p>
          </div>

          <div className="modern-feature">
            <div className="feature-icon purple">🚀</div>
            <h3>Build Your Skills</h3>
            <p>
              Gain practical experience and improve your
              technical knowledge.
            </p>
          </div>

          <div className="modern-feature">
            <div className="feature-icon green">🎯</div>
            <h3>Grow Your Career</h3>
            <p>
              Connect with opportunities that help you
              move closer to your career goals.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="cta-section">

        <div>
          <h2>Ready to start your journey?</h2>

          <p>
            Explore internship opportunities and find
            the right one for you.
          </p>
        </div>

        <Link to="/jobs" className="cta-btn">
          Browse Internships →
        </Link>

      </section>

    </div>
  );
}

export default Home;