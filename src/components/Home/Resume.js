import React from 'react';
import './Resume.scss';

const Resume = () => {
  return (
    <div className="resume-container">
      <button
        className="large-flat-button"
        onClick={() => {
          const googleDriveLink = 'https://docs.google.com/document/d/15_qai4uMWPXdEeZPueN4rLQlKn_5N3jgFuiMk2of46Q/edit?usp=sharing';
          window.open(googleDriveLink, '_blank');
        }}
      >
        VIEW RESUME
      </button>
      {/* Other content here */}
    </div>
  );
};

export default Resume;
