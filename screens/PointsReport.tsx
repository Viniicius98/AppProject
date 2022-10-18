import React from "react";
import styled from "styled-components/native";
import { RootTabScreenProps } from "../types";
import { useContext } from "react";
import { InputValueContext } from "../context/InputValueContext";
import Header from "../components/Header";
import PointsReportComponents from "../components/PointsReportComponents";

export default function PointsReport() {
  const Container = styled.View`
    height: 100%;
    margin-top: -13%;
  `;

  const ConteinerHeader = styled.View`
    width: 100%;
    height: 20%;
    margin-top: 3%;
    margin-left: 0%;
  `;

  const ConteinerReport = styled.View`
    width: 100%;
    height: 80%;
    margin-top: 35.8%;
    margin-left: 0%;
  `;

  return (
    <Container>
      <ConteinerHeader>
        <Header />
      </ConteinerHeader>
      <ConteinerReport>
        <PointsReportComponents />
      </ConteinerReport>
    </Container>
  );
}
