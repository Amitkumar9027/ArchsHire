import React from "react";
import "./Architects.css"; // Import CSS file
import profileImage from '../../../assets/images/profile.png'
import HIreButton from '../../HireButton/HIreButton';
import { useNavigate } from "react-router-dom";

// Dummy architect data (can be fetched from API in the future)
const architects = [
  {
    id: 1,
    name: "John Doe",
    expertise: "Modern Architecture",
    rating: 4.9,
    portfolio: "10+ Years Experience | 50+ Projects",
    image: profileImage,
  },
  {
    id: 2,
    name: "Jane Smith",
    expertise: "Sustainable Design",
    rating: 4.8,
    portfolio: "15+ Years Experience | 70+ Projects",
    image: profileImage,
  },
  {
    id: 3,
    name: "Michael Lee",
    expertise: "Commercial Spaces",
    rating: 4.7,
    portfolio: "12+ Years Experience | 60+ Projects",
    image: profileImage,
  },
];

const handleHire = () => {
  navigate(`/hire/${architect.id}`, { state: { architect } });
};


const navigate=useNavigate();
const Architects = () => {
  return (
    <section className="architects-section">
      <h2 className="section-title">Top Rated Architects</h2>
      <div className="architects-container">
        {architects.map((architect) => (
          
          <div key={architect.id} className="architect-card">
            <img src={architect.image} alt={architect.name} className="architect-image" />
            <div className="architect-info">
              <h3 className="architect-name">{architect.name}</h3>
              <p className="architect-expertise">{architect.expertise}</p>
              <p className="architect-portfolio">{architect.portfolio}</p>
              <p className="architect-rating">⭐ {architect.rating}</p>
              <HIreButton onClick={()=> handleHire(architect)}/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Architects;
