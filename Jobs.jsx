import { useState } from "react";
import JobCard from "../components/JobCard";

function Jobs() {
  const [search, setSearch] = useState("");

  const jobs = [
    {
      title: "Frontend Developer Intern",
      company: "DG Interns Hub",
      location: "Coimbatore, India",
      type: "Internship",
    },
    {
      title: "Python Developer Intern",
      company: "Tech Solutions",
      location: "Chennai, India",
      type: "Internship",
    },
    {
      title: "Full Stack Developer",
      company: "Web Innovations",
      location: "Bangalore, India",
      type: "Internship",
    },
    {
      title: "Data Analyst Intern",
      company: "Data Works",
      location: "Hyderabad, India",
      type: "Internship",
    },
    {
      title: "UI/UX Designer Intern",
      company: "Creative Studio",
      location: "Remote",
      type: "Internship",
    },
    {
      title: "React JS Developer",
      company: "Digital Labs",
      location: "Bangalore, India",
      type: "Internship",
    },
  ];

  const filteredJobs = jobs.filter((job) =>
    `${job.title} ${job.company} ${job.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="jobs-page-modern">
      <div className="jobs-header">
        <span>CAREER OPPORTUNITIES</span>

        <h1>Explore Internship Opportunities</h1>

        <p>
          Find the right opportunity to gain experience,
          build your skills and grow your career.
        </p>
      </div>

      <div className="jobs-search">
        <span>🔍</span>

        <input
          type="text"
          placeholder="Search by job title, company or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="jobs-result">
        <h3>{filteredJobs.length} Opportunities Available</h3>
      </div>

      <div className="modern-jobs-grid">
        {filteredJobs.map((job, index) => (
          <div className="modern-job-wrapper" key={index}>
            <div className="job-type-badge">OPEN</div>

            <JobCard
              title={job.title}
              company={job.company}
              location={job.location}
              type={job.type}
            />
          </div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="empty-jobs">
          <div>🔎</div>
          <h3>No opportunities found</h3>
          <p>Try searching with another keyword.</p>
        </div>
      )}
    </div>
  );
}

export default Jobs;