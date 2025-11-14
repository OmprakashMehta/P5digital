import React from "react";

const clientsRow1 = [
  {
    name: "Montfort School",
    city: "Hazaribagh",
    logo: "src/assets/montfort.png",
  },
  {
    name: "Montfort School",
    city: "Hazaribagh",
    logo: "src/assets/montfort.png",
  },
  {
    name: "Montfort School",
    city: "Hazaribagh",
    logo: "src/assets/montfort.png",
  },
  {
    name: "Montfort School",
    city: "Hazaribagh",
    logo: "src/assets/montfort.png",
  },
];

const clientsRow2 = [
  {
    name: "Montfort School",
    city: "Hazaribagh",
    logo: "src/assets/montfort.png",
  },
  {
    name: "Montfort School",
    city: "Hazaribagh",
    logo: "src/assets/montfort.png",
  },
  {
    name: "Montfort School",
    city: "Hazaribagh",
    logo: "src/assets/montfort.png",
  },
  {
    name: "Montfort School",
    city: "Hazaribagh",
    logo: "src/assets/montfort.png",
  },
  {
    name: "Montfort School",
    city: "Hazaribagh",
    logo: "src/assets/montfort.png",
  },
  {
    name: "Montfort School",
    city: "Hazaribagh",
    logo: "src/assets/montfort.png",
  },
];

const clientsRow3 = [
  {
    name: "Montfort School",
    city: "Hazaribagh",
    logo: "src/assets/montfort.png",
  },
  {
    name: "Montfort School",
    city: "Hazaribagh",
    logo: "src/assets/montfort.png",
  },
  {
    name: "Montfort School",
    city: "Hazaribagh",
    logo: "src/assets/montfort.png",
  },
  {
    name: "Montfort School",
    city: "Hazaribagh",
    logo: "src/assets/montfort.png",
  },
  {
    name: "Montfort School",
    city: "Hazaribagh",
    logo: "src/assets/montfort.png",
  },
  {
    name: "Montfort School",
    city: "Hazaribagh",
    logo: "src/assets/montfort.png",
  },
  {
    name: "Montfort School",
    city: "Hazaribagh",
    logo: "src/assets/montfort.png",
  },
];

const ClientsSection = () => {
  return (
    <section className="clients-section">
      <div className="clients-container">
        <div className="clients-left">
          <h2 className="clients-title">
            OUR <br />
            <span>CLIENTS,</span>
          </h2>
        </div>

        <div className="clients-right">
          <div className="clients-row row-1">
            {clientsRow1.map((client, index) => (
              <div key={index} className="client-card">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="client-logo"
                />
                <p>
                  {client.name},{" "}
                  <span className="city-name">{client.city}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="clients-row row-2">
            {clientsRow2.map((client, index) => (
              <div key={index} className="client-card">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="client-logo"
                />
                <p>
                  {client.name},{" "}
                  <span className="city-name">{client.city}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="clients-row row-3">
            {clientsRow3.map((client, index) => (
              <div key={index} className="client-card">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="client-logo"
                />
                <p>
                  {client.name},{" "}
                  <span className="city-name">{client.city}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
