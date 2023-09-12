import '/Users/hamzakhamissa/Downloads/Sukrut-Portfolio-main/src/components/Home/Resume.scss'
import React from 'react';

const Resume = () => {

    return (
        <button
        className="large-flat-button"
        onClick={() => {
        const googleDriveLink = 'https://docs.google.com/document/d/15_qai4uMWPXdEeZPueN4rLQlKn_5N3jgFuiMk2of46Q/edit?usp=sharing';

    
        window.open(googleDriveLink, '_blank');
        }}
        >
        VIEW RESUME
        </button>
    )
}

export default Resume;