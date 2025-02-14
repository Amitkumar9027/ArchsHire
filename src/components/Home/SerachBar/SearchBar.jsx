


// checking with dummy data
import React, { useState } from "react";
import "./SearchBar.css"; // Import the CSS file

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
          { id: 1, name: "John Doe", project: "Project Alpha" },
          { id: 2, name: "Jane Smith", project: "Project Beta" },
          { id: 3, name: "Alice Johnson", project: "Project Gamma" },
          { id: 4, name: "Bob Brown", project: "Project Delta" },
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

