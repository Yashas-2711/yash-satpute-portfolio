import React, { Component } from 'react'
import "./About.css";
export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-card">
          <h2>About Me</h2>

          <p>
            I am Yash Satpute, an AI & Data Science student with a strong
            interest in Full Stack Development and Artificial Intelligence. I
            have experience in building modern web applications using HTML, CSS, 
            JavaScript, and React.
          </p>

          <p>
            I have completed my industrial training in Web Design & Development
            at InnovationsHub Pvt. Ltd., where I worked on real-world web
            projects and improved my frontend and backend skills.
          </p>

          <div className="about-grid">
            <div className="about-box">
              <h3>Education</h3>
              <p>AI & Data Science Student</p>
            </div>

            <div className="about-box">
              <h3>Training</h3>
              <p>Web Design & Development – InnovationsHub Pvt. Ltd.</p>
            </div>

            <div className="about-box">
              <h3>Skills</h3>
              <p>C , C++, Java, Python, MYSQL, CSS, HTML, JavaScript, React</p>
            </div>

            <div className="about-box">
              <h3>Interests</h3>
              <p>AI, Web Development, Problem Solving</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
