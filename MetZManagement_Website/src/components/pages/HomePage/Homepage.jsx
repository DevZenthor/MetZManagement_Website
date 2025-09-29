import React from "react";
import "./homepage.css";
import logo from "../../../assets/images/logo.png"; 

export default function Home() {
  return (
    <main className="home-container">
      <section className="hero">
        <img src={logo} alt="M&Z Management Logo" className="logo" />
        <p className="home-text">
          M&amp;Z Management est une agence belge dédiée à aider les pépites de la scène Fortnite, joueurs et créateurs de contenu, à progresser et se faire connaître. Créée par deux amis, <strong>Zenthor</strong> et <strong>Marcok</strong>, l'agence a été montée petit à petit pour soutenir les talents belges dans le gaming et la création de contenu. Notre mission est d’accompagner les joueurs et créateurs de contenu à progresser, se professionnaliser et se faire remarquer sur la scène compétitive de Fortnite.
        </p>
      </section>
    </main>
  );
}