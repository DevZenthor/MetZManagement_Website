import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <main className="contact-container">
      <h1 className="contact-title">Contactez-nous</h1>
      <form
        action="https://formspree.io/f/xovkezjr" 
        method="POST"
        className="contact-form"
      >
        <label>
          Votre nom :
          <input type="text" name="name" required />
        </label>

        <label>
          Votre email :
          <input type="email" name="_replyto" required />
        </label>

        <label>
          Sujet :
          <input type="text" name="subject" required />
        </label>

        <label>
          Message :
          <textarea name="message" rows="5" required></textarea>
        </label>

        <button type="submit" className="contact-btn">Envoyer</button>
      </form>
    </main>
  );
}