import React from "react";
import "./homepage.css";
import logo from "../../../assets/images/logo.png"; 

export default function Home() {
  return (
    <main className="home-container">
      {/* Section Hero */}
      <section className="hero">
        <img src={logo} alt="M&Z Management Logo" className="logo" />
        <h1>M&amp;Z Management</h1>
        <p>
          Une agence belge dédiée à aider les pépites de la scène Fortnite, joueurs et créateurs de contenu, à progresser et se faire connaître.
        </p>
      </section>

      {/* Section Présentation */}
      <section className="presentation">
        <h2>Qui sommes-nous ?</h2>
        <p>
          M&amp;Z Management a été créé par deux amis, <strong>Zenthor</strong> et <strong>Marcok</strong>. 
          Partant de rien, ils ont monté petit à petit une agence pour soutenir les talents belges dans le gaming et la création de contenu.
        </p>
      </section>

      {/* Section Mission */}
      <section className="mission">
        <h2>Notre mission</h2>
        <p>
          Accompagner les joueurs et créateurs de contenu à progresser, se professionnaliser et se faire remarquer sur la scène compétitive de Fortnite.
        </p>
      </section>
    </main>
  );
}