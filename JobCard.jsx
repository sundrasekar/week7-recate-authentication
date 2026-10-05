import { useState } from "react";

function JobCard({ title, company, location, type }) {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully!");
    setShowForm(false);
  };

  return (
    <>
      <div className="job-card">
        <h2>{title}</h2>
        <h3>{company}</h3>

        <p>📍 {location}</p>
        <p>💼 {type}</p>

        <button onClick={() => setShowForm(true)}>
          Apply Now
        </button>
      </div>

      {showForm && (
        <div className="modal-overlay">
          <div className="application-form">
            <button
              className="close-btn"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>

            <h2>Apply for {title}</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
              />

              <button type="submit">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default JobCard;