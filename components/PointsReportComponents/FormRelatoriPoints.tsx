import React, { useState } from "react";
import styled from "styled-components/native";
import {CircleFill} from "@styled-icons/bootstrap/CircleFill"

import {Zap} from '@styled-icons/octicons'

const RedZap = styled(Zap)`
  color: red;
`

const BackgroundContainer = styled.View`
  height: 125%;
  width: 100%;
  margin-top: -34.4%;
  
`;
const TextoCursosone = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #B8977E;
  padding-left: 20%;
  margin-top: 1px;
  
`;
const TextoCursos = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #B8977E;
  padding-left: 1%;
  margin-top: 1px;
  
`;

const TextBoll = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #3C4858;
  padding-left: 13%;
  margin-top: 1px;
`;

const TextoCursostwo = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #B8977E;
  padding-left: 11%;
  margin-top: 1px;
  
`;
const TextoCursosthree = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #B8977E;
  padding-left: 8%;
  margin-top: 1px;
  
`;

const TextoCursosfour = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #B8977E;
  padding-left: 20%;
  margin-top: 45px;
  
`;



export default function FormRelatoriPoints() {
  return (
    <>
      <BackgroundContainer>        
                     
              <TextoCursosone>Total de frequência com</TextoCursosone>
              <TextoCursos>aproveitamento em cursos oficiais</TextoCursos>
              <TextBoll>Cursos</TextBoll>        
              <TextBoll>Oficiais</TextBoll> 
              <TextoCursostwo>Total de frequência em ações</TextoCursostwo>
              <TextoCursosthree>educacionais não credenciadas</TextoCursosthree>
             
              <TextBoll>Atuação como</TextBoll>        
              <TextBoll>Docente</TextBoll>

              <TextBoll>Diplomas e</TextBoll>        
              <TextBoll>Títulos</TextBoll>s

              <TextBoll>Prática</TextBoll>        
              <TextBoll>Jurisdicional</TextBoll>

              <TextBoll>Publicações</TextBoll>

              <TextoCursosfour>Total de pontos =</TextoCursosfour>
          
          
        
      </BackgroundContainer>
    </>
  );
}
