import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [status, setStatus] = useState(""); // état pour message de confirmation

  const handleSubmit = async (e) => {
    e.preventDefault(); // empêche le refresh automatique
    const form = e.target;

    // Envoi via Formspree
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset(); // remet le formulaire à zéro
      setStatus("Votre message a bien été envoyé !");
      setTimeout(() => setStatus(""), 5000); // message disparaît après 5s
    } else {
      setStatus("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <main className="contact-container">
      <h1 className="contact-title">Contactez-nous</h1>
      <form
        action="https://formspree.io/f/xovkezjr" // remplace par ton URL Formspree
        method="POST"
        className="contact-form"
        onSubmit={handleSubmit}
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
        {status && <p className="status-message">{status}</p>}
      </form>
    </main>
  );
}
