import React, { useState } from "react";
import styled from "styled-components/native";
import CardAtividade from "../CardInserirAtividade";
import CardPoints from "../CardPoints";
import Dropdown from "../Dropdown";
import AppLogo from "../Header/Applogo";
import FormRelatoriPoints from "../../components/PointsReportComponents/FormRelatoriPoints";

const BackgroundContainer = styled.View`
  height: 125%;
  width: 100%;
  margin-top: -34.4%;
  background: #1e2d3eee;
`;

const ImageBackground = styled.Image`
  height: 30%;
  width: 100%;
  margin-top: -0%;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 0;
  opacity: 0.3;
`;

const Imagerelatoriopoints = styled.View`
  height: 66%;
  width: 98%;
  margin-left: 1%;
  margin-top: 35%;
`;

const ContentItems = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: flex-end;
`;
const DropdownItems = styled.View`
  width: 100%;
  height: 460px;
  margin-bottom: 70px;
`;

const IconsItems = styled.View`
  width: 100%;
  height: 475.6px;
  margin-bottom: 32%;
  margin-left: -68%;
`;
const IconsApp = styled.View`
  width: 100%;
  height: 100px;
  margin-top: -41%;
  margin-left: 74%;
`;

const ListItems = styled.View`
  width: 90%;
  height: 450px;
  margin-left: 6%;
  margin-top: -30%;
  background-color: #fff;
`;
const TextoCursos = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #333;
  padding-left: 5%;
  margin-top: 6px;
  color: #343f4b;
`;
const TitleCustom = styled.View`
  background: #fff;
  border-bottom-width: 8px;
  border-bottom-color: #b8977e;
  flex-direction: row;
  width: 100%;
  height: 20px;
  align-items: center;
`;

export default function PointsReport() {
  return (
    <>
      <BackgroundContainer>
        <ImageBackground
          source={require("../../assets/images/background.png")}
        />

        <ContentItems>
          <DropdownItems>
            <ListItems>
              <TextoCursos>RELATÓRIO</TextoCursos>
              <TitleCustom></TitleCustom>

              <Imagerelatoriopoints>
              
               <FormRelatoriPoints />

              </Imagerelatoriopoints>
            </ListItems>
          </DropdownItems>

          <IconsItems>
            <CardPoints />
            <IconsApp>
              <AppLogo />
            </IconsApp>
          </IconsItems>
        </ContentItems>
      </BackgroundContainer>
    </>
  );
}
