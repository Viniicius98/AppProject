import React from "react";
import styled from "styled-components/native";
import AppLogo from "./Applogo";
import EmerjLogo from "./EmerjLogo";

const HeaderContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 12%;
  background: #1e2d3e;
  border-top-width: 1px;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
  margin-top: -152%;
  
  z-index: 1;
`;
const ConatinerLogo = styled.View`
  width: 100%;    
  height: 15%;   
  margin-top: 80%;
  margin-left: 80%;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <EmerjLogo />

      <ConatinerLogo>
       <AppLogo />  
      </ConatinerLogo>    
    </HeaderContainer>
  );
}
