import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from "recharts";

// Sample Data
const cropPriceData = [
  { month: "Jan", Maize: 30, Beans: 85, Tomatoes: 55 },
  { month: "Feb", Maize: 32, Beans: 87, Tomatoes: 60 },
  { month: "Mar", Maize: 35, Beans: 90, Tomatoes: 62 },
  { month: "Apr", Maize: 36, Beans: 92, Tomatoes: 65 },
];

const rainfallData = [
  { month: "Jan", Rainfall: 50 },
  { month: "Feb", Rainfall: 70 },
  { month: "Mar", Rainfall: 120 },
  { month: "Apr", Rainfall: 90 },
];

const livestockData = [
  { name: "Cattle", value: 400 },
  { name: "Goats", value: 300 },
  { name: "Sheep", value: 200 },
  { name: "Poultry", value: 600 },
];

const COLORS = ["#2e7d32", "#81c784", "#388e3c", "#a5d6a7"];

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
            <li style={{ margin: "1rem 0", cursor: "pointer" }} onClick={() => scrollTo("market")}>🌾 Market</li>
            <li style={{ margin: "1rem 0", cursor: "pointer" }} onClick={() => scrollTo("education")}>📚 Education</li>
            <li style={{ margin: "1rem 0", cursor: "pointer" }} onClick={() => scrollTo("charts")}>📊 Analytics</li>
            <li style={{ margin: "1rem 0", cursor: "pointer" }} onClick={() => scrollTo("contact")}>📞 Contact</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, backgroundColor: "#f5f9f6", padding: "2rem" }}>
        {/* Hero Image */}
        <div style={{ marginBottom: "2rem" }}>
          <img
            src="https://source.unsplash.com/1200x400/?farm,agriculture"
            alt="Agriculture"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>

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
          <img src="https://source.unsplash.com/800x400/?tractor,field" alt="Farmer Services" style={{ width: "100%", marginTop: "1rem", borderRadius: "8px" }} />
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
          <img src="https://source.unsplash.com/800x400/?trees,climate" alt="Climate Action" style={{ width: "100%", marginTop: "1rem", borderRadius: "8px" }} />
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
          <img src="https://source.unsplash.com/800x400/?market,vegetables" alt="Market" style={{ width: "100%", marginTop: "1rem", borderRadius: "8px" }} />
        </section>

        {/* Education */}
        <section id="education" style={{ marginBottom: "2rem", backgroundColor: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h2>📚 Farmer Education</h2>
          <p>Access free resources and training on sustainable agriculture:</p>
          <ul>
            <li>Guides on soil management</li>
            <li>Workshops on irrigation techniques</li>
            <li>Webinars on climate-smart farming</li>
            <li>Mobile app tips for crop disease detection</li>
          </ul>
          <img src="https://source.unsplash.com/800x400/?farmers,training" alt="Education" style={{ width: "100%", marginTop: "1rem", borderRadius: "8px" }} />
        </section>

        {/* Analytics / Charts */}
        <section id="charts" style={{ marginBottom: "2rem", backgroundColor: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h2>📊 Analytics Dashboard</h2>

          {/* Crop Prices Trend */}
          <h3>Crop Price Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={cropPriceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Maize" stroke="#2e7d32" />
              <Line type="monotone" dataKey="Beans" stroke="#388e3c" />
              <Line type="monotone" dataKey="Tomatoes" stroke="#81c784" />
            </LineChart>
          </ResponsiveContainer>

          {/* Rainfall Pattern */}
          <h3>Rainfall Pattern</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={rainfallData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Rainfall" fill="#2e7d32" />
            </BarChart>
          </ResponsiveContainer>

          {/* Livestock Distribution */}
          <h3>Livestock Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={livestockData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {livestockData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </section>

        {/* Contact */}
        <section id="contact" style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "8px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
          <h2>📞 Contact Us</h2>
          <p>Email: info@agritech-hub.org</p>
          <p>Phone: +254 700 123456</p>
        </section>

        <footer style={{ marginTop: "2rem", textAlign: "center", color: "#555" }}>
          <p>&copy; 2025 Agritech Hub. All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
