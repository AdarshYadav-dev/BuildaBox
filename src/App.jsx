import React from "react";
import BoxesSection from "./components/BoxesSection";
import "./App.scss";

function App() {
  return (
    <div className="main-container">
      <div className="container">
        {/* Head Section */}
        <div className="container-head">
          <p className="container-title">
            Versatile and Fully Customizable Template
          </p>
          <p className="container-para">
            We are a real estate firm with over 20 years of expertise, and our
            main goal is to provide amazing locations to our partners and
            clients.
          </p>
        </div>

        {/* Boxes Section */}
        <BoxesSection />
      </div>
    </div>
  );
}

export default App;
