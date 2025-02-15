


// checking with dummy data
import React, { useState } from "react";
import "./SearchBar.css"; // Import the CSS file

import profileImage from '../../../assets/images/profile.png'

const SearchBar = ({ onSearch ,onclick}) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
// const[clicked, setClicked]=useState(false);
  // Function to generate dummy data
  const fetchDummyData = (query) => {
    // Simulate a delay to mimic network request
    return new Promise((resolve) => {
      setTimeout(() => {
        const dummyData = [
          {
            id: 1,
            name: "John Doe",
            expertise: "Modern Architecture",
            rating: 4.9,
            portfolio: "10+ Years Experience | 50+ Projects",
            project: "Project Alpha",
            image: profileImage,
          },
          {
            id: 2,
            name: "Jane Smith",
            expertise: "Interior Design",
            rating: 4.7,
            portfolio: "8+ Years Experience | 30+ Projects",
            project: "Project Beta",
            image: profileImage,
          },
          {
            id: 3,
            name: "Alice Johnson",
            expertise: "Landscape Architecture",
            rating: 4.8,
            portfolio: "12+ Years Experience | 40+ Projects",
            project: "Project Gamma",
            image: profileImage,
          },
          {
            id: 4,
            name: "Bob Brown",
            expertise: "Urban Planning",
            rating: 4.6,
            portfolio: "15+ Years Experience | 60+ Projects",
            project: "Project Delta",
            image: profileImage,
          },
          {
            id: 5,
            name: "Emma Wilson",
            expertise: "Sustainable Design",
            rating: 4.9,
            portfolio: "9+ Years Experience | 35+ Projects",
            project: "Project Epsilon",
            image: profileImage,
          },
          {
            id: 6,
            name: "Liam Martinez",
            expertise: "Residential Architecture",
            rating: 4.8,
            portfolio: "11+ Years Experience | 45+ Projects",
            project: "Project Zeta",
            image: profileImage,
          },
          {
            id: 7,
            name: "Sophia Anderson",
            expertise: "Commercial Architecture",
            rating: 4.7,
            portfolio: "14+ Years Experience | 55+ Projects",
            project: "Project Eta",
            image: profileImage,
          },
          {
            id: 8,
            name: "Noah Thomas",
            expertise: "Industrial Design",
            rating: 4.5,
            portfolio: "10+ Years Experience | 48+ Projects",
            project: "Project Theta",
            image: profileImage,
          },
          {
            id: 9,
            name: "Olivia Roberts",
            expertise: "Heritage Conservation",
            rating: 4.9,
            portfolio: "13+ Years Experience | 52+ Projects",
            project: "Project Iota",
            image: profileImage,
          },
          {
            id: 10,
            name: "William Scott",
            expertise: "Furniture Design",
            rating: 4.6,
            portfolio: "7+ Years Experience | 28+ Projects",
            project: "Project Kappa",
            image: profileImage,
          },
          {
            id: 11,
            name: "Mia Lewis",
            expertise: "Retail Design",
            rating: 4.8,
            portfolio: "12+ Years Experience | 50+ Projects",
            project: "Project Lambda",
            image: profileImage,
          },
          {
            id: 12,
            name: "James White",
            expertise: "Urban Landscaping",
            rating: 4.7,
            portfolio: "10+ Years Experience | 42+ Projects",
            project: "Project Mu",
            image: profileImage,
          },
          {
            id: 13,
            name: "Charlotte Hall",
            expertise: "Hospitality Design",
            rating: 4.9,
            portfolio: "16+ Years Experience | 65+ Projects",
            project: "Project Nu",
            image: profileImage,
          },
          {
            id: 14,
            name: "Benjamin Young",
            expertise: "Public Space Design",
            rating: 4.8,
            portfolio: "14+ Years Experience | 55+ Projects",
            project: "Project Xi",
            image: profileImage,
          },
          {
            id: 15,
            name: "Amelia King",
            expertise: "Educational Architecture",
            rating: 4.7,
            portfolio: "10+ Years Experience | 38+ Projects",
            project: "Project Omicron",
            image: profileImage,
          },
        ];

        // Filter dummy data based on the query (case-insensitive)
        const filteredData = dummyData.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );
        resolve(filteredData);
      }, 1000); // Simulate 1 second delay
    });
  };

  const handleSearch = async () => {
    if (query.trim()) {
      setLoading(true);
      const data = await fetchDummyData(query); // Fetch dummy data
      onSearch(data); // Send the dummy data to the parent component
      setLoading(false);
    } else {
      alert("Please enter a search term.");
    }
    // setClicked(true);
    onclick(true);
  };

  return (
    <div className="bodyOFsearch">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for projects or architects..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button className="search-button" onClick={handleSearch}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;








// import React, { useState } from "react";
// import "./SearchBar.css"; // Import the CSS file

// const SearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Function to fetch data from the backend
//   const fetchData = async (query) => {
//     setLoading(true);
//     try {
//       // Replace this with your actual API endpoint
//       const response = await fetch(`https://api.example.com/search?q=${query}`);
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       onSearch(data); // Send the fetched data to the parent component
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       alert("Failed to fetch data. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = () => {
//     if (query.trim()) {
//       fetchData(query); // Fetch data from the backend
//     } else {
//       alert("Please enter a search term.");
//     }
//   };

//   return (
//     <div className="bodyOFsearch">
//       <div className="search-container">
//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search for projects or architects..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//         />
//         <button className="search-button" onClick={handleSearch}>
//           {loading ? "Searching..." : "Search"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;

