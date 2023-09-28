import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [serialNumber, setSerialNumber] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/result?q=${encodeURIComponent(serialNumber)}`);
  };

  return (
    <div className="container">
      <div className="logo">
        {/* <img src="your_logo_url_here" alt="Logo" /> */}
        <h1>I am Coool Loogoo</h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter Serial Number"
          value={serialNumber}
          onChange={(e) => setSerialNumber(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchPage;
