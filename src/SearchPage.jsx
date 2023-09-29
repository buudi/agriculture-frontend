import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text, Heading, Input, IconButton, Flex } from '@chakra-ui/react'
import { SearchIcon   } from '@chakra-ui/icons'

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
        <Heading style={{paddingBottom: '0.3rem'}}>AgroChain</Heading>
        <Text fontSize='sm'>Track the product quality grade</Text>
      </div>
      <div className="search-bar">
        <Flex>
          <Input
          className="serialInput"
            type="text"
            placeholder="Enter Serial Number"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
          />
            <IconButton
            style={{marginLeft: '0.8rem'}}
              colorScheme='blue'
              aria-label='Search database'
              icon={<SearchIcon />}
              onClick={handleSearch}
            />  
          </Flex>
      </div>
    </div>
  );
};

export default SearchPage;
