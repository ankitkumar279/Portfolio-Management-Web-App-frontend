import React, { useEffect, useState } from "react";
import axios from "axios";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaInstagram 
} from "react-icons/fa";
import "../App.css";

// Use your deployed backend URL
const API_BASE = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({});
  const [loading, setLoading] = useState(false);

  // Fetch contact info for display
  useEffect(() => {
    axios.get(`${API_BASE}/api/contact`)
      .then((res) => setContactInfo(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Handle form submission
 const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    subject: e.target.subject.value,
    message: e.target.message.value,
  };

  try {
    const res = await axios.post(`${API_BASE}/api/send-contact`, formData);
    alert(res.data.message);
    e.target.reset();
  } catch (err) {
    console.error(err);
    alert("Error sending message. Please try again later.");
  }
};

  return (
    <div className="contact-page">
      <div className="contact-header text-center">
        <h2>Let's Connect</h2>
        <p>Have a project in mind or just want to chat? I'd love to hear from you!</p>
      </div>

      <div className="contact-vertical-container-center">
        <form className="contact-form-box" onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="John Doe" required />

          <label>Email Address</label>
          <input type="email" name="email" placeholder="john@example.com" required />

          <label>Subject</label>
          <input type="text" name="subject" placeholder="Project Inquiry" />

          <label>Message</label>
          <textarea name="message" placeholder="Your message here..." required></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        <div className="contact-big-box">
          <div className="info-row">
            <FaEnvelope />
            <span className="label">Mail</span>
            <span className="value">{contactInfo.email}</span>
          </div>


          <div className="info-row">
            <FaMapMarkerAlt />
            <span className="label">Location</span>
            <span className="value">{contactInfo.location}</span>
          </div>

          <h3 className="follow-title">FOLLOW ME</h3>
          <div className="social-icons-horizontal">
            <a href="https://github.com/ankitkumar279" target="_blank" rel="noreferrer">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/ankit-kumar-026a2b39a/" target="_blank" rel="noreferrer">
              <FaLinkedin size={28} />
            </a>
            <a href="mailto:ankitchahar88@gmail.com">
              <FaEnvelope size={28} />
            </a>
            <a href="https://www.instagram.com/ankitchahar_jaat/" target="_blank" rel="noreferrer">
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
