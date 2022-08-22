import React from "react";
import styled from "styled-components/native";
import { RootTabScreenProps } from "../types";
import InserirAtividadeComponents from "../components/InserirTitulosComponents";
import { useContext } from "react";
import { InputValueContext } from "../context/InputValueContext";
import Header from "../components/Header";
import AppLogo from "../components/Header/Applogo";
import PointsReportComponents from "../components/PointsReportComponents";

export default function PointsReport({
  navigation,
}: RootTabScreenProps<"PointsReport">) {
  const { state, dispatch } = useContext(InputValueContext);

  const Container = styled.View`
    height: 100%;
    margin-top: -5.9%;
  `;

  const ConteinerHeader = styled.View`
    width: 100%;
    height: 20%;

    margin-top: -4%;

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
