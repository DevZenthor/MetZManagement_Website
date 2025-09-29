import React from "react";
import "./manager.css";
import manager1 from "../../../assets/images/manager1.jpg";
import manager2 from "../../../assets/images/manager2.jpg";
import manager3 from "../../../assets/images/manager3.jpg";
import twitterIcon from "../../../assets/images/logotwitter.png"; 

export default function Managers() {
  const managers = [
    {
      pseudo: "Zenthor",
      age: 25,
      nationalite: "Belge",
      clients: 2,
      logo: manager1,
      twitter: "https://x.com/zenthor1480",
    },
    {
      pseudo: "Marcok",
      age: 28,
      nationalite: "Belge",
      clients: 3,
      logo: manager2,
      twitter: "https://x.com/marcokttv",
    },
    {
      pseudo: "Lordmatt",
      age: 30,
      nationalite: "Belge",
      clients: 0,
      logo: manager3,
      twitter: "https://x.com/LNaufrages",
    },
  ];

return (
    <main className="managers-section">
      <h1 className="managers-title">Nos Managers</h1>
      <div className="managers-container">
        {managers.map((manager, index) => (
          <section
            key={index}
            className={`manager-card manager-card-${index}`}
          >
            <img
              src={manager.logo}
              alt={`${manager.pseudo} Logo`}
              className="manager-logo"
            />
            <h2>{manager.pseudo}</h2>
            <p><strong>Âge :</strong> {manager.age}</p>
            <p><strong>Nationalité :</strong> {manager.nationalite}</p>
            <p><strong>Nombre de clients :</strong> {manager.clients}</p>
            <a
              href={manager.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="twitter-link"
            >
              <img src={twitterIcon} alt="Twitter" className="twitter-icon" />
            </a>
          </section>
        ))}
      </div>
    </main>
  );
}
