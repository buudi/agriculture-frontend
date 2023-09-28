import React, { useEffect, useState } from "react";

const ResultPage = () => {
  const [serialNumber, setSerialNumber] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const term = urlParams.get("q");
    setSerialNumber(term);
  }, []);

  return (
    <div className="container">
      <h1>Search Result</h1>
      <div id="result">You searched for: {serialNumber}</div>
    </div>
  );
};

export default ResultPage;
