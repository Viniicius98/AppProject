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
    margin-top: -5.9%;
    border-bottom-width: 10px;
    border-bottom-color: #b8977e;
  `;
  const Container2 = styled.View`
    height: 20%;
    flex: 1;
    justify-content: center;
    align-items: center;
    position: absolute;
  `;
  return (
    <Container>
<<<<<<< HEAD
      <Header />
=======
     
>>>>>>> vinicius_branch
      <InserirAtividadeComponents />
    </Container>
  );
}