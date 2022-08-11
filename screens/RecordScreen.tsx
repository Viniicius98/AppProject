import React from "react";
import styled from "styled-components/native";
import { RootTabScreenProps } from "../types";
import InserirAtividadeComponents from "../components/InserirTitulosComponents";
import { useContext } from "react";
import { InputValueContext } from "../context/InputValueContext";
import Dropdown from "../components/Dropdown";
import CardAtividade from "../components/CardInserirAtividade";
import HomeIcon from "../components/HomeIcon";

const BackgroundContainer = styled.View`
  height: 100%;
  width: 100%;
  background: #1e2d3eee;
`;

const ImageBackground = styled.Image`
  height: 24%;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 0;
  opacity: 0.3;
`;

const ContentItems = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: flex-end;
`;
const CursoItems = styled.View`
  width: 100%;
  height: 80%;
  padding-right: -10%;
`;

const IconsItems = styled.View`
  width: 100%;
  height: 89.1%;
  margin-left: -68%;
`;
const ListItems = styled.View`
  width: 90%;
  height: 450px;
  margin-left: 6%;
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
  color: #343f4b;
`;
const InputContainer = styled.View`
  margin-top: 40%;
  position: absolute;
`;

const Input = styled.TextInput`
  height: 50px;
  width: 300px;
  background-color: #e0e6ed;
  border: none;
  background: #fff;
  padding-left: 30px;
  margin-bottom: 1px;
  border-bottom-width: 1px;
  border-bottom-color: #c0ccda;
`;
const ContainerSubmitButton = styled.View`
  margin-top: 110%;
  padding-left: 60%;
  padding-right: 4%;
`;

const SubmitButton = styled.Button`
  width: 50x;
  height: 50px;
`;

export default function Record() {
  return (
    <>
      <BackgroundContainer>
        <ImageBackground source={require("../assets/images/background.png")} />

        <HomeIcon />

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

<<<<<<< HEAD
             </InputContainer>  

             <ContainerSubmitButton>
              <SubmitButton
          title="Registrar"
          color="#B8977E"    
          />          
          </ContainerSubmitButton>                     
                    
          </ListItems>  
              
=======
              <ContainerSubmitButton>
                <SubmitButton title="Registrar" color="#B8977E" />
              </ContainerSubmitButton>
            </ListItems>
>>>>>>> 1f71cb8fd741eed13e3c7e29feec049180f377f0
          </CursoItems>

          <IconsItems>
            <CardAtividade />
          </IconsItems>
        </ContentItems>
      </BackgroundContainer>
    </>
  );
}
