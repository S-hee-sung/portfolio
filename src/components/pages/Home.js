import React from 'react';
import styled from "styled-components";
import Header from '../../organize/Header';
import HomeTxtWrap from '../../organize/HomeTxtWrap';
import Preloader from '../../organize/Preloader';


const HomeDiv = styled.div`
	overflow: hidden;
	@media ${(props) => props.theme.mobile} {
		overflow: auto;
	}
`;


function Home(props) {
  
  return (
    <HomeDiv>
      <Header page="home"/>
      <HomeTxtWrap />
      <Preloader />
    </HomeDiv>
  );
}

export default Home;