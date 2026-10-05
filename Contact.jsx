function Contact() {
  return (
    <div className="contact-modern">

      <div className="contact-heading">
        <span>GET IN TOUCH</span>

        <h1>We'd love to hear from you</h1>

        <p>
          Have a question about internships or opportunities?
          Send us a message and we'll get back to you.
        </p>
      </div>

      <div className="contact-layout">

        {/* Contact Information */}
        <div className="contact-details">

          <div className="contact-detail-card">
            <div className="contact-icon">📧</div>
            <div>
              <h3>Email Us</h3>
              <p>support@dginternshub.com</p>
            </div>
          </div>

          <div className="contact-detail-card">
            <div className="contact-icon">📍</div>
            <div>
              <h3>Our Location</h3>
              <p>Coimbatore, Tamil Nadu</p>
            </div>
          </div>

          <div className="contact-detail-card">
            <div className="contact-icon">📞</div>
            <div>
              <h3>Call Us</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="contact-form-card">

          <h2>Send us a message</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Your message has been submitted.");
            }}
          >

            <div className="form-row">
              <input
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                required
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              required
            />

            <textarea
              placeholder="Write your message..."
              rows="6"
              required
            ></textarea>

            <button type="submit">
              Send Message →
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;