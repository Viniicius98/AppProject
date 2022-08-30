import React, { useState } from "react";
import styled from "styled-components/native";
import { View, TextInput, StyleSheet, Text} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';



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

const ControllerToobar = styled.View`
padding-top: 8%;
margin-left: 25%;
position: absolute;

`;

const IconToobar = styled.View`

padding-top: 6px;
margin-left: 59%;
position: absolute;
`;

const Textpointstoobar = styled.Text`
font-size: 13px;
font-weight: bold;
color: #8492A6;
padding-left: 82%;
margin-top: -18px;
`;

const TextoCursos = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #B8977E;
  padding-left: 1%;
  margin-top: 1px;
  
`;

const Textpoints = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #8492A6;
  padding-left: 59%;
  margin-top: -20px;
`;

const TextBoll = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #3C4858;
  padding-left: 13%;
  margin-top: 1px;
`;

const ControllerBoll = styled.View` 
  padding-top: 44px;
  margin-left: 4%;
  position: absolute;
`;

const ControllerBollAtua = styled.View`
  padding-top: 315%;
  margin-left: 4%;
  position: absolute;
`;

const TextPointatua = styled.Text`
   font-size: 13px;
   font-weight: bold;
   color: #8492A6;
   padding-left: 61%;
   margin-top: 38%;
   position: absolute;
`;

const TextPointaDip = styled.Text`
   font-size: 13px;
   font-weight: bold;
   color: #8492A6;
   padding-left: 61%;
   margin-top: 50%;
   position: absolute;
`;

const TextPointaPra = styled.Text`
   font-size: 13px;
   font-weight: bold;
   color: #8492A6;
   padding-left: 61%;
   margin-top: 61%;
   position: absolute;
`;

const TextPointaPub = styled.Text`
    font-size: 13px;
    font-weight: bold;
    color: #8492A6;
    padding-left: 61%;
    margin-top: 71%;
    position: absolute;
`;

const TextPointTotal = styled.Text`
    font-size: 13px;
    font-weight: bold;
    color: #8492A6;
    padding-left: 84%;
    margin-top: 26%;
    position: absolute;
`;

const ControllerBollDip = styled.View`
   padding-top: 410%;
   margin-left: 4%;
   position: absolute;
`;

const ControllerBollPrat = styled.View`
  padding-top: 500%;
   margin-left: 4.3%;
   position: absolute;
`;

const ControllerBollPub = styled.View`
  padding-top: 619%;
  margin-left: 5.5%;
  position: absolute;

`;

const ControllerBollPubli = styled.View`
padding-top: 224px;
margin-left: 16px;
position: absolute;
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
  padding-left: 12%;
  margin-top: 45px;
  
`;

const IconToobarfour = styled.View`
  padding-left: 62%;
  margin-top: 75%;
  position: absolute;

`;

const TextpointFour = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #B8977E;
    padding-left: 74%;
    margin-top: 90.3%;
    position: absolute;
`;


export default function FormRelatoriPoints() {
  return (
    <>
      <BackgroundContainer>        
                
              <TextoCursosone>Total de frequência com</TextoCursosone>
              <TextoCursos>aproveitamento em cursos oficiais</TextoCursos>
              
                <ControllerToobar>     
                <IconToobar>
                <Icon name="minus" size={22}  color='#273444' />
                </IconToobar>
              <Textpointstoobar>5,0 pts</Textpointstoobar>
              </ControllerToobar> 
              
              
              <ControllerBoll>
              <Icon name="controller-record" size={25} color='#273444'/>
              <Textpoints>5,0 pts</Textpoints>
              </ControllerBoll>
              <TextBoll>Cursos</TextBoll>        
              <TextBoll>Oficiais</TextBoll> 
              
              <TextoCursostwo>Total de frequência em ações</TextoCursostwo>
              <TextoCursosthree>educacionais não credenciadas</TextoCursosthree>
              <TextPointTotal>12,0 pts</TextPointTotal> 
             
              <ControllerBollAtua>
              <Icon name="controller-record" size={25} color='#79899F'/>
              </ControllerBollAtua>
              <TextBoll>Atuação como</TextBoll>        
              <TextBoll>Docente</TextBoll>
              <TextPointatua>3,0 pts</TextPointatua> 

              <ControllerBollDip>
              <Icon name="controller-record" size={25} color='#C0CCDA'/>
              </ControllerBollDip>
              <TextBoll>Diplomas e</TextBoll>        
              <TextBoll>Títulos</TextBoll>
              <TextPointaDip>5,0 pts</TextPointaDip> 

              <ControllerBollPrat>
              <Icon name="controller-record" size={25} color='#D3DCE6' />
              </ControllerBollPrat>
              <TextBoll>Prática</TextBoll>        
              <TextBoll>Jurisdicional</TextBoll>
              <TextPointaPra>3,0 pts</TextPointaPra>
              
              <ControllerBollPubli>
              <Icon name="controller-record" size={22} color='#F5F7FA' />
              </ControllerBollPubli>

              <ControllerBollPub>
              <Icon name="circle" size={19} color='#D3DCE6' />              
              </ControllerBollPub>

              <TextBoll>Publicações</TextBoll>
              <TextPointaPub>1,0 pts</TextPointaPub>

              <TextoCursosfour>Total de pontos =</TextoCursosfour>
              <IconToobarfour>
              <Icon name="circular-graph" size={120} color='#79899F' />
              </IconToobarfour>
              <TextpointFour>17,0 pts</TextpointFour>
           
        
      </BackgroundContainer>
    </>
  );
}
