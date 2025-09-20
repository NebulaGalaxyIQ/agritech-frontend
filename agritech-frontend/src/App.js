import React from "react";

function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ display: "flex", fontFamily: "Arial, sans-serif", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside style={{ width: "250px", backgroundColor: "#2e7d32", color: "white", padding: "2rem 1rem" }}>
        <h2 style={{ marginBottom: "2rem", textAlign: "center" }}>🌍 Agritech Hub</h2>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ margin: "1rem 0", cursor: "pointer" }} onClick={() => scrollTo("services")}>🚜 Services</li>
            <li style={{ margin: "1rem 0", cursor: "pointer" }} onClick={() => scrollTo("climate")}>🌱 Climate</li>
            <li style={{ margin: "1rem 0", cursor: "pointer" }} onClick={() => scrollTo("market")}>🌾 Market Prices</li>
            <li style={{ margin: "1rem 0", cursor: "pointer" }} onClick={() => scrollTo("education")}>📚 Education</li>
            <li style={{ margin: "1rem 0", cursor: "pointer" }} onClick={() => scrollTo("contact")}>📞 Contact</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, backgroundColor: "#f5f9f6", padding: "2rem" }}>
        {/* Services */}
        <section id="services" style={{ marginBottom: "2rem", backgroundColor: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h2>🚜 Farmer Services</h2>
          <ul>
            <li>Market access for farm produce</li>
            <li>Veterinary services</li>
            <li>Climate-smart agriculture training</li>
            <li>Irrigation solutions for drylands</li>
            <li>Fertilizer and input supply chain</li>
            <li>Farmer cooperative support</li>
          </ul>
        </section>

        {/* Climate Action */}
        <section id="climate" style={{ marginBottom: "2rem", backgroundColor: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h2>🌱 Climate Action</h2>
          <p>
            Our platform promotes tree planting, dryland cultivation, and irrigation
            systems to fight climate change and ensure sustainable farming.
          </p>
          <ul>
            <li>Tree planting campaigns</li>
            <li>Water harvesting projects</li>
            <li>Renewable energy for farms</li>
          </ul>
        </section>

        {/* Market Prices */}
        <section id="market" style={{ marginBottom: "2rem", backgroundColor: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h2>🌾 Market Prices</h2>
          <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead style={{ backgroundColor: "#c8e6c9" }}>
              <tr>
                <th>Crop</th>
                <th>Price per Kg (KES)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Maize</td><td>35</td></tr>
              <tr><td>Beans</td><td>90</td></tr>
              <tr><td>Tomatoes</td><td>60</td></tr>
              <tr><td>Onions</td><td>55</td></tr>
              <tr><td>Cabbages</td><td>25</td></tr>
            </tbody>
          </table>
        </section>

        {/* Farmer Education */}
        <section id="education" style={{ marginBottom: "2rem", backgroundColor: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h2>📚 Farmer Education</h2>
          <p>Access free resources and training on sustainable agriculture:</p>
          <ul>
            <li>Guides on soil management</li>
            <li>Workshops on irrigation techniques</li>
            <li>Webinars on climate-smart farming</li>
            <li>Mobile app tips for crop disease detection</li>
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h2>📞 Contact Us</h2>
          <p>Email: info@agritech-hub.org</p>
          <p>Phone: +254 700 123456</p>
        </section>

        {/* Footer */}
        <footer style={{ marginTop: "2rem", textAlign: "center", color: "#555" }}>
          <p>&copy; 2025 Agritech Hub. All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
