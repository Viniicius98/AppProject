import React from "react";
import styled from "styled-components/native";
import { RootTabScreenProps } from "../types";
import InserirAtividadeComponents from "../components/InserirTitulosComponents";
import { useContext } from "react";
import { InputValueContext } from "../context/InputValueContext";
import Dropdown from "../components/Dropdown";
import CardAtividade from "../components/CardInserirAtividade";
<<<<<<< HEAD
import Header from "../components/Header";
import AppLogo from "../components/Header/Applogo";

const BackgroundContainer = styled.View`
  height: 100%;
  width: 100%;
  margin-top: 9%;
  background: #1e2d3eee;
=======






  const BackgroundContainer = styled.View`
  height: 100%;
  width: 100%;
  background: #1e2d3eee;
  
>>>>>>> vinicius_branch
`;

const ImageBackground = styled.Image`
  height: 24%;
  width: 100%;
  align-items: center;
  justify-content: center;
<<<<<<< HEAD
=======
  position: absolute;
>>>>>>> vinicius_branch
  z-index: 0;
  opacity: 0.3;
`;

const ContentItems = styled.View`
<<<<<<< HEAD
=======
 
>>>>>>> vinicius_branch
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: flex-end;
`;
const CursoItems = styled.View`
  width: 100%;
<<<<<<< HEAD
  height: 75%;
=======
  height: 80%;
>>>>>>> vinicius_branch
  padding-right: -10%;
`;

const IconsItems = styled.View`
  width: 100%;
<<<<<<< HEAD
  height: 78%;
  margin-top: -9%;
  margin-left: -68%;
  margin-bottom: 45%;
=======
  height: 89.1%;
  margin-left: -68%;
  
>>>>>>> vinicius_branch
`;
const ListItems = styled.View`
  width: 90%;
  height: 450px;
  margin-left: 6%;
<<<<<<< HEAD
  margin-top: -70%;
=======
>>>>>>> vinicius_branch
  background-color: #fff;
`;

const TitleCustom = styled.View`
  background: #fff;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
  flex-direction: row;
  width: 100%;
  height: 20px;
  align-items: center;
`;
const SubTitleCustom = styled.View`
  background: #c0ccda;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
  flex-direction: row;
  width: 100%;
  height: 50px;
  align-items: center;
  margin-top: 24%;
`;
const TextoCursos = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #333;
  padding-left: 5%;
  margin-top: 6px;
<<<<<<< HEAD
  color: #343f4b;
`;
const InputContainer = styled.View`
  margin-top: 30%;
  position: absolute;
=======
  color: #343F4B;
`;
const InputContainer = styled.View`
margin-top: 40%;
position: absolute;
>>>>>>> vinicius_branch
`;

const Input = styled.TextInput`
  height: 50px;
<<<<<<< HEAD
  width: 320px;
  background-color: #e0e6ed;
  border: none;
  background: #fff;
  padding-left: 20px;
  margin-bottom: 1px;
  border-bottom-width: 1px;
  border-bottom-color: #c0ccda;
=======
  width: 300px;
  background-color: #e0e6ed;
  border: none;
  background: #fff;
  padding-left: 30px;
  margin-bottom: 1px;
  border-bottom-width: 1px;
  border-bottom-color: #C0CCDA;
  
>>>>>>> vinicius_branch
`;
const ContainerSubmitButton = styled.View`
  margin-top: 110%;
  padding-left: 60%;
  padding-right: 4%;
<<<<<<< HEAD
=======
  
>>>>>>> vinicius_branch
`;

const SubmitButton = styled.Button`
  width: 50x;
  height: 50px;
<<<<<<< HEAD
`;
const ConteinerHeader = styled.View`
  width: 100%;
  height: 20%;
  margin-top: -14%;
  margin-left: 0%;
`;
const ConteinerApp = styled.View`
  width: 100%;
  height: 20%;
  margin-top: -37%;
  margin-left: 74%;
`;

export default function Record() {
  return (
    <>
      <BackgroundContainer>
        <ConteinerHeader>
          <Header />
        </ConteinerHeader>

        <ImageBackground source={require("../assets/images/background.png")} />

        <ContentItems>
          <CursoItems>
            <ListItems>
              <TextoCursos>CURSOS</TextoCursos>
              <TitleCustom>
                <SubTitleCustom>
                  <TextoCursos>CREDENCIADO PELA ENFAM</TextoCursos>
                </SubTitleCustom>
              </TitleCustom>
              <InputContainer>
                <Input placeholder="NOME DO CURSO" />
                <Input placeholder="INSTITUIÇÃO" />
                <Input placeholder="CARGA HORÁRIA" />
              </InputContainer>

              <ContainerSubmitButton>
                <SubmitButton title="Registrar" color="#B8977E" />
              </ContainerSubmitButton>
            </ListItems>
          </CursoItems>

          
          
          
          <IconsItems>   
          <CardAtividade />         
            <ConteinerApp>
              <AppLogo />
            </ConteinerApp>
          </IconsItems>

        </ContentItems>
=======
  
  
`;

export default function Record(){
  
  return (
    <>
    
      <BackgroundContainer>
        
        <ImageBackground
          source={require("../assets/images/background.png")}
        />
        
        <ContentItems>

          <CursoItems>
          <ListItems>
            <TextoCursos>CURSOS</TextoCursos>
          <TitleCustom>
          
            <SubTitleCustom>
            <TextoCursos>CREDENCIADO PELA ENFAM</TextoCursos>
            </SubTitleCustom>            
             
           
          
          </TitleCustom>   
          <InputContainer>
            <Input placeholder="NOME DO CURSO" />
             <Input placeholder="INSTITUIÇÃO"/>  
             <Input placeholder="CARGA HORÁRIA"/>

             </InputContainer>  

             <ContainerSubmitButton>
              <SubmitButton
          title="Registrar"
          color="#B8977E"
          
          />
          
          </ContainerSubmitButton>
             

        
                    
          </ListItems>  
              
          </CursoItems>

          <IconsItems>
            <CardAtividade />            
          </IconsItems>
          
        </ContentItems>
        
>>>>>>> vinicius_branch
      </BackgroundContainer>
    </>
  );
}
<<<<<<< HEAD
=======

>>>>>>> vinicius_branch
