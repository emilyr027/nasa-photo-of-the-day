import React, { useState, useEffect } from "react";
import Header from './Components/header';
import CardInfo from './Components/cardInfo';
import "./App.css";
import axios from 'axios';
import {BASE_URL, API_KEY} from './Constants/constants';
import styled from 'styled-components';



const StyledNasa = styled.div`
  color: red;
  font-size:2rem;
`



function App() {
  const [nasaObj, nasaData] = useState({})

  useEffect(() => {
    axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
    .then(response => {
      nasaData(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])
  console.log(nasaObj);
  
  
  return (
    <StyledNasa>
      <Header/>
      <CardInfo nasaObj={nasaObj}/>
    </StyledNasa>
  );
}

export default App;

