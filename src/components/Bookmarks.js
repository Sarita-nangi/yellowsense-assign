import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Bookmark.css';

const Bookmarks = () => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookmarkedJobs = async () => {
      try {
        const storedJobs = localStorage.getItem('bookmarkedJobs');
        const parsedJobs = storedJobs ? JSON.parse(storedJobs) : [];
        setBookmarkedJobs(parsedJobs);
      } catch (err) {
        setError('Failed to load bookmarked jobs');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookmarkedJobs();
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
  };

  if (isLoading) return <p>Loading bookmarks...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="bookmarks-wrapper">
      <header className="bookmarks-header">
        <button onClick={() => handleNavigate('/jobs')}>Jobs</button>
        <button onClick={() => handleNavigate('/')}>Home</button>
        <h1>Your Bookmarked Jobs</h1>
      </header>

      <section className="bookmarks-list">
        {bookmarkedJobs.length > 0 ? (
          bookmarkedJobs.map((job) => (
            <div key={job.id} className="bookmark-item">
              <Link to={`/job/${job.id}`} className="bookmark-link">
                <h2>{job?.title || 'Title Not Available'}</h2>
                <p><strong>Location:</strong> {job?.primary_details?.Place || 'N/A'}</p>
                <p><strong>Salary:</strong> {job?.primary_details?.Salary || 'N/A'}</p>
                <p><strong>Type:</strong> {job?.primary_details?.Job_Type || 'N/A'}</p>
                <p><strong>Experience:</strong> {job?.primary_details?.Experience || 'N/A'}</p>
                <p><strong>Fees:</strong> {job?.primary_details?.Fees_Charged || 'N/A'}</p>
                <p><strong>Qualification:</strong> {job?.primary_details?.Qualification || 'N/A'}</p>
                <p><strong>Contact:</strong> {job?.whatsapp_no || 'N/A'}</p>
                <p><strong>Company:</strong> {job?.company_name || 'N/A'}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No bookmarked jobs found.</p>
        )}
      </section>
    </div>
  );
};

export default Bookmarks;