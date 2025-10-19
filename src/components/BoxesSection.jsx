import React from "react";

// Import images
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo1 from "../assets/logo1.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo8 from "../assets/logo8.png";
import logo9 from "../assets/logo9.png";

const boxesData = [
  {
    img: logo1,
    title: "Tiles",
    desc: "Sell smarter with stunning product galleries, bulk order tools, and dealer-friendly portals.",
  },
  {
    img: logo2,
    title: "Healthcare",
    desc: "Compliant, secure, and user-friendly platforms designed for trust and accessibility.",
  },
  {
    img: logo3,
    title: "Home Appliances",
    desc: "Streamline shopping with smart filters, delivery scheduling, and warranty management.",
  },
  {
    img: logo4,
    title: "Apparel",
    desc: "Boost sales with real-time stock, size guides, lookbooks, and AI-driven recommendations.",
  },
  {
    img: logo5,
    title: "Beauty & Cosmetics",
    desc: "Personalized shopping, subscription boxes, and loyalty programs that keep customers coming back.",
  },
  {
    img: logo6,
    title: "Travel",
    desc: "Inspire bookings with immersive visuals, flexible packages, and instant payments.",
  },
  {
    img: logo1,
    title: "Retail",
    desc: "Seamless integration of POS, inventory, and online sales for a true omnichannel experience.",
  },
  {
    img: logo8,
    title: "Electronics",
    desc: "Highlight specs, reviews, and add-ons while simplifying the buying process.",
  },
  {
    img: logo9,
    title: "Furniture",
    desc: "3D previews, room visualizers, and custom order workflows to increase conversions.",
  },
];

const BoxesSection = () => {
  return (
    <div className="boxes">
      {boxesData.map((box, index) => (
        <div className="box" key={index}>
          <div className="box-icon">
            <img src={box.img} alt={box.title} />
          </div>

          <div className="box-content">
            <p className="box-title">{box.title}</p>
            <p className="box-desc">{box.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoxesSection;
