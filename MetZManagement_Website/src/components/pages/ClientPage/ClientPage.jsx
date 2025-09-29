import React from "react";
import "./clients.css";

// images joueurs Fortnite
import fortniteLogo from "../../../assets/images/logoFortnite.png";
import twitterIcon from "../../../assets/images/logotwitter.png";
import youtubeIcon from "../../../assets/images/logoyoutube.png";
import tiktokIcon from "../../../assets/images/logoTitok.png";

// photos des joueurs
import joueur1 from "../../../assets/images/joueur1.jpg";
import joueur2 from "../../../assets/images/joueur2.jpg";
import joueur3 from "../../../assets/images/joueur3.jpg";
import joueur4 from "../../../assets/images/joueur4.jpg";

// photo du créateur de contenu
import content1 from "../../../assets/images/content1.jpg";

export default function Clients() {
  // Joueurs Fortnite
  const fortnitePlayers = [
    {
      name: "Krayy",
      age: 15,
      nationalite: "Français",
      photo: joueur1,
      tracker: "https://fortnitetracker.com/profile/all/fa%20krayy2k",
      twitter: "https://x.com/krayy2k",
    },
    {
      name: "Hydranix",
      age: 19,
      nationalite: "Français",
      photo: joueur2,
      tracker: "https://fortnitetracker.com/profile/all/Hydranix.",
      twitter: "https://x.com/HYDRANIX_T",
    },
    {
      name: "Dabi",
      age: 17,
      nationalite: "Français",
      photo: joueur3,
      tracker: "https://fortnitetracker.com/profile/kbm/ky%20dabi%20oath/events?region=EU",
      twitter: "https://x.com/dabi3kk",
    },
    {
      name: "Omexo",
      age: 15,
      nationalite: "danois",
      photo: joueur4,
      tracker: "https://fortnitetracker.com/profile/all/omexo./events",
      twitter: "https://x.com/omexofn",
    },
  ];

  // Joueurs Valorant (0 pour l’instant)
  const valorantPlayers = [];

  // Créateurs de contenu
  const contentCreators = [
    {
      name: "Viral_ftn",
      age: 17,
      nationalite: "Français",
      photo: content1,
      youtube: "https://www.youtube.com/@Viral_ftn",
      tiktok: "https://www.tiktok.com/@viral_ftn?lang=fr",
      twitter: "https://x.com/viral_ftn",
    },
  ];

  return (
    <main className="clients-section">
      <h1 className="clients-title">Nos Clients</h1>

      {/* Joueurs Fortnite */}
      <h2 className="category-title">Joueurs Fortnite</h2>
      <div className="clients-container">
        {fortnitePlayers.map((player, index) => (
          <div key={index} className="client-card">
            <img src={player.photo} alt={player.name} className="client-photo" />
            <h3>{player.name}</h3>
            <p><strong>Âge :</strong> {player.age}</p>
            <p><strong>Nationalité :</strong> {player.nationalite}</p>
            <div className="client-links">
              <a href={player.tracker} target="_blank" rel="noopener noreferrer">
                <img src={fortniteLogo} alt="Fortnite Tracker" className="client-icon" />
              </a>
              <a href={player.twitter} target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Twitter" className="client-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Joueurs Valorant */}
      <h2 className="category-title">Joueurs Valorant</h2>
      {valorantPlayers.length === 0 ? (
        <p className="empty-text">Aucun joueur Valorant pour le moment</p>
      ) : (
        <div className="clients-container">
          {valorantPlayers.map((player, index) => (
            <div key={index} className="client-card">
              {/* infos valorant */}
            </div>
          ))}
        </div>
      )}

      {/* Créateurs de contenu */}
      <h2 className="category-title">Créateurs de Contenu</h2>
      <div className="clients-container">
        {contentCreators.map((creator, index) => (
          <div key={index} className="client-card">
            <img src={creator.photo} alt={creator.name} className="client-photo" />
            <h3>{creator.name}</h3>
            <p><strong>Âge :</strong> {creator.age}</p>
            <p><strong>Nationalité :</strong> {creator.nationalite}</p>
            <div className="client-links">
              <a href={creator.youtube} target="_blank" rel="noopener noreferrer">
                <img src={youtubeIcon} alt="YouTube" className="client-icon" />
              </a>
              <a href={creator.tiktok} target="_blank" rel="noopener noreferrer">
                <img src={tiktokIcon} alt="TikTok" className="client-icon" />
              </a>
              <a href={creator.twitter} target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Twitter" className="client-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}