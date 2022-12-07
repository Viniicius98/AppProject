import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CardCourse from "../../../Cards/CardCourse";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import ModalProgramation from "../CourseComponents/ModalProgramation";
import ModalSubscription from "../CourseComponents/ModalSubscription";
import apiTokenQuery from "../../../../services/apiTokenQuery";

const BackgroundContainer = styled.SafeAreaView`
  flex: 1;
  background: #343f4b;
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

const ContentItems = styled.View`
  flex: 2;
  max-width: 100%;
  max-height: 72%;
  margin-top: 20%;
  flex-direction: row;
  align-items: flex-end;
`;
const ContainerList = styled.View`
  width: 90%;
  height: 100%;
  margin-left: 4%;
  margin-right: auto;
  margin-bottom: auto;
  margin-top: -10%;
  background: #fff;
  align-items: center;
`;

const ContainerTitleCourse = styled.View`
  background: #c0ccda;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
  width: 100%;
  height: 40px;
  margin-top: 0%;
  align-items: flex-start;
`;
const TextCourse = styled.Text`
  font-size: 17px;
  font-weight: bold;
  padding-top: 1%;
  padding-left: 5%;
  color: #343f4b;
`;
const ButtonSubscrition = styled.TouchableOpacity`
  width: 30%;
  height: 8%;
  background: #b9977e;
  margin-top: 125%;
  margin-left: 65%;
  border-radius: 10px;
  border-radius-bottom: 10px;
  align-items: center;
  justify-content: center;
`;
const ButtonText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: white;
`;
const ContainerDescription = styled.View`
  position: absolute;
  width: 98%;
  height: 90%;
  margin-top: 15%;
  margin-left: 11%;
  background: #d9d9d9;
  align-items: center;
`;
const CargaHoraria = styled.Text`
  margin-top: 3%;
  font-size: 17px;
  font-weight: bold;
  allowfontscaling: false;
`;
const Data = styled.Text`
  margin-top: 3%;
  font-size: 17px;
  font-weight: bold;
  allowfontscaling: false;
`;

const Modalidade = styled.Text`
  margin-top: 3%;
  font-size: 17px;
  font-weight: bold;
  allowfontscaling: false;
`;
const Vagas = styled.Text`
  margin-top: 3%;
  font-size: 17px;
  font-weight: bold;
  allowfontscaling: false;
`;
const Encontro = styled.Text`
  margin-top: 3%;
  font-size: 17px;
  font-weight: bold;
  allowfontscaling: false;
`;
const Magistrado = styled.Text`
  margin-top: 3%;
  font-size: 17px;
  font-weight: bold;
  allowfontscaling: false;
`;
const Nome = styled.Text`
  margin-top: 3%;
  font-size: 17px;
  font-weight: bold;
  allowfontscaling: false;
`;
const Lotação = styled.Text`
  margin-top: 3%;
  font-size: 17px;
  font-weight: bold;
  allowfontscaling: false;
`;
const Email = styled.Text`
  margin-top: 3%;
  font-size: 17px;
  font-weight: bold;
  allowfontscaling: false;
`;

export default function CourseInfoComponents(props: any) {
  const curso = props.nome.titEven;
  const codEvento = props.nome.codEven;

  const [codEve, setCodEven] = useState("007392");
  const [codLocProg, setcodLocProg] = useState("000035");
  const [dtIni, setdtIni] = useState("30/09/2022");
  const [dtFim, setdtFim] = useState("03/09/2022");
  const [cpf, setcpf] = useState("28863720720");
  const [descTpInscrEven] = useState("Presencial");
  const [token, setToken] = useState("");
  const [encontro, setEncontro] = useState("");

  const getToken = async () => {
    try {
      const accessToken = await AsyncStorage.getItem("@accessToken");
      if (accessToken) {
        setToken(accessToken);
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível acessar o token");
    }
  };

  useEffect(() => {
    getToken();
    if (token) {
      encontros(token);
      console.log(encontro);
    }
  }, [token]);

  const subscription = async () => {
    try {
      const sub = await apiTokenQuery.post(
        "/inscricao/incluir",
        {
          codEven: "007392",
          codlocprog: "000035",
          dtinieven: "30/09/2022",
          dtfimeven: "03/09/2022",
          cpf: "28863720720",
          codTpInscrEven: "Presencial",
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const MensSub = sub.data;
      Alert.alert(MensSub);
    } catch (error) {
      Alert.alert("Não foi Possivel se Inscrever no Curso");
    }
  };
  const encontros = async (token: any) => {
    try {
      const encSincro = await apiTokenQuery.get(
        `/evento/encontros/${codEvento}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const message = encSincro.data;
    } catch (error) {
      console.log("catch acessar cursos");
      Alert.alert("Erro", "Não foi possível ");
    }
  };

  return (
    <>
      <BackgroundContainer>
        <CardCourse />
        <ImageBackground
          source={require("../../../../assets/images/background.png")}
        />

        <ContentItems>
          <ContainerList>
            <ContainerTitleCourse>
              <TextCourse>{curso}</TextCourse>
            </ContainerTitleCourse>
            <ContainerDescription>
              <CargaHoraria>
                Carga Horária: {props.nome.cargaHoraria} Horas
              </CargaHoraria>
              <Data>Inicio: {props.nome.dtIniEven}</Data>
              <Data>Término : {props.nome.dtFimEven}</Data>
              <Modalidade>
                Modalidade: {props.nome.tipoModalidadeInscricao.descTpInscrEven}
              </Modalidade>
              <Vagas>Vagas: {props.nome.numVaga}</Vagas>
              <Encontro>Encontros Síncronos: </Encontro>
            </ContainerDescription>
            <ButtonSubscrition>
              <ButtonText onPress={subscription}>Inscreva-se</ButtonText>
            </ButtonSubscrition>
          </ContainerList>
          <ModalProgramation event={codEvento} />
        </ContentItems>
      </BackgroundContainer>
    </>
  );
}
