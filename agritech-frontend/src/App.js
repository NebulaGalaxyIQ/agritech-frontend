import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f5f9f6", minHeight: "100vh" }}>
      <header style={{ backgroundColor: "#2e7d32", padding: "1rem", color: "white" }}>
        <h1>🌍 Agritech Hub</h1>
        <p>Connecting farmers to services, boosting agriculture, and fighting food insecurity.</p>
      </header>

      <main style={{ padding: "2rem" }}>
        <section style={{ marginBottom: "2rem" }}>
          <h2>🚜 Farmer Services</h2>
          <ul>
            <li>Market access for farm produce</li>
            <li>Veterinary services</li>
            <li>Climate-smart agriculture training</li>
            <li>Access to irrigation solutions</li>
          </ul>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2>🌱 Climate Action</h2>
          <p>
            Our platform promotes tree planting, dryland cultivation, and irrigation
            systems to fight climate change and ensure sustainable farming.
          </p>
        </section>

        <section>
          <h2>📞 Contact Us</h2>
          <p>Email: info@agritech-hub.org</p>
          <p>Phone: +254 700 123456</p>
        </section>
      </main>

      <footer style={{ backgroundColor: "#2e7d32", color: "white", padding: "1rem", marginTop: "2rem" }}>
        <p>&copy; 2025 Agritech Hub. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
