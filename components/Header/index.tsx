import React from "react";
import styled from "styled-components/native";
import AppLogo from "./Applogo";
import EmerjLogo from "./EmerjLogo";
import AppLogotwe from "./Applogotwe";


const HeaderContainer = styled.View`
  width: 364px;
  height: 95px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: #1e2d3e;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
  margin-right: 15%;
`;

const ContainerLogo = styled.View`
  position: absolute;
  width: 40%;
  height: 100%;
  margin-top: -19%;
  margin-left: 27%;
  margin-bottom: 22%;
  z-index: 0;

`;

export default function Header(props: any) {
  return (
    <HeaderContainer>
      <EmerjLogo />
      <AppLogo />
      <ContainerLogo>
        
      </ContainerLogo>
    </HeaderContainer>
    
    
  );
}
