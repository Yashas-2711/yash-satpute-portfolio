import React, { Component } from 'react'
import "./Contact.css";
export default class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <div className="contact-card">
          <h2>Contact Me</h2>
          <p>Feel free to reach out. I will get back to you soon.</p>

          <form className="contact-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Enter subject" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                placeholder="Write your message..."
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>

          <div className="social-section">
            <h3>Connect with me</h3>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/yash-satpute-554031286/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Yashas-2711"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com/y_a_s_h_2711/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
