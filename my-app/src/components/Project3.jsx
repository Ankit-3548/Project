import React, { useState } from "react";
import OIP from "../assets/OIP.jpg";
import "./Project3.css";

function Card({ card }) {
  return (
    <div className={`card ${card.className}`}>
      <div className="cardIntro">
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>
      <div className="cardPrice">
        <span>{card.price === null ? "Contact" : "$"}</span>
        <h3>{card.price === null ? "Us" : card.price}</h3>
      </div>
      <div className="cardFeatures">
        <ul>
          {card.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <button type="button">Get Started</button>
    </div>
  );
}

export default function Project3() {
  const [cards, setCards] = useState([
    {
      id: 1,
      className: "card-basic",
      title: "Basic",
      description: "For personal use and exploration of AI technology",
      price: 0,
      features: ["100 requests per day", "Free trial features", "Limited API access"],
    },
    {
      id: 2,
      className: "card-premium",
      title: "Premium",
      description: "Perfect for the professionals and small business in need of significient AI Integration",
      price: 9.99,
      features: ["Unlimited AI generation", "Full new features", "Advanced settings"],
    },
    {
      id: 3,
      className: "card-enterprise",
      title: "Enterprise",
      description: "Perfect for large business and organistions that require specialised support",
      price: null,
      features: ["Custom deployment", "Comprehensive using data", "Training specialised models"],
    },
  ]);
  return (
    <div className="project3-page">
      <header>
        <nav className="pageHeader">
          <div className="logo">
            <div className="logoImg">
              <img src={OIP} alt="Poe logo" />
            </div>
            <div className="logoDetails">
              <h2>Poe</h2>
            </div>
          </div>
          <div className="navLinks">
            <ul>
              <li>
                <a href="#">Pricing </a>
              </li>
              <li>
                <a href="#">ChangeLog</a>
              </li>
              <li>
                <a href="#">Github</a>
              </li>
              <li>
                <a href="#">Go Pro</a>
              </li>
            </ul>
          </div>
          <div className="navBtn">
            <button type="button">Download</button>
          </div>
        </nav>
      </header>
      <main>
        <section>
          <div className="Details">
            <h1>Choose Your Plan</h1>
            <h3>Unlock Endless possibilites</h3>
          </div>
        </section>
        <section>
          <div className="cards">
            {cards.map((card) => (
              <Card
                key={card.id}
                card={card}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

