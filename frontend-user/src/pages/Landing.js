import React from "react";
import "../styles/App.css";

function Landing() {
  const whatsappNumber = "+14155238886"; // Replace with your number
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi`;

  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="landing-text">
          <h1>MediLink</h1>
          <p>
            MediLink is your safe space for health support.  
            Get quick guidance on symptoms, prescriptions, nearby clinics, and request an ambulance all through WhatsApp. Stay informed and take care of your health, effortlessly.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <button className="whatsapp-btn">Chat on WhatsApp</button>
          </a>
        </div>
        <div className="landing-image">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
            alt="Health Support"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
