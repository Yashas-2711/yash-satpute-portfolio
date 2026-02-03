import React, { Component } from 'react'
import "./Home.css";
import profileImg from "../assets/image.png";
export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
      <div className="home-content">
        <div className="text-section">
          <h2>Hello, I'm <span className="highlight">Yash Satpute</span></h2>
          <h3>AI & Data Science Student | Full Stack Developer</h3>
          <p>
            I have completed my industrial training in Web Design & Development at InnovationsHub Pvt. Ltd.
            I love building modern, responsive, and AI-powered applications.
          </p>

          <div className="skills">
            <span>C</span>
            <span>C++</span>
            <span>Java</span>
            <span>Python</span>
            <span>MYSQL</span>
            <span>CSS</span>
            <span>HTML</span>
            <span>JavaScript</span>
            <span>React</span>
            
          </div>

        </div>

        <div className="image-section">
          <img src={profileImg} alt="Yash Satpute" />
        </div>
      </div>
    </div>
  );
};
    
  
}
