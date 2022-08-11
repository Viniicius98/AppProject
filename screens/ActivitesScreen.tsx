import React from "react";
import styled from "styled-components/native";
import { RootTabScreenProps } from "../types";
import InserirAtividadeComponents from "../components/InserirTitulosComponents";
import { useContext } from "react";
import { InputValueContext } from "../context/InputValueContext";
import Header from "../components/Header";
import AppLogo from "../components/Header/Applogo";

export default function Activites({
  navigation,
}: RootTabScreenProps<"Activites">) {
  const { state, dispatch } = useContext(InputValueContext);

  const Container = styled.View`
    height: 100%;
    border-bottom-width: 10px;
    border-bottom-color: #b8977e;
  `;
  const Container2 = styled.View`
    height: 20%;
    margin-bottom: 0%;
    background: black;
    border-bottom-width: 10px;
    border-bottom-color: #b8977e;
  `;
  const Container3 = styled.View`
    height: 20%;
    margin-bottom: 0%;
    background: black;
    border-bottom-width: 10px;
    border-bottom-color: #b8977e;
  `;
  return (
    <Container>
      <Container2>
        <Header />
        <AppLogo />
      </Container2>
      <Container3>
        <AppLogo />
      </Container3>
      <InserirAtividadeComponents />
    </Container>
  );
}
