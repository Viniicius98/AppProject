import React, { useState } from "react";
import styled from "styled-components/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  FlatList,
  GestureResponderEvent,
  ImageProps,
  TouchableHighlight,
} from "react-native";
import CardPerfilMagistrado from "../CardMagistrado";
import CardConsultaEnfam from "../CardConsultaEnfam";
import CardNotificacoes from "../../components/CardNotificacoes";
import { Link } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import AppLogo from "../Header/Applogo";
import BackButton from "../BackButton";

const BackgroundContainer = styled.View`
  height: 100%;
  width: 100%;
  background: #1e2d3eee;
  position: relative;
`;

const ImageBackground = styled.Image`
  height: 24%;
  width: 100%;
  align-items: center;
  justify-content: center;
  opacity: 0.3;
  position: absolute;
  z-index: 0;
`;

const ContentItems = styled.View`
  position: absolute;
  height: 81.9%;
  flex-direction: row;
  align-items: flex-end;
`;
const FlatListItems = styled.View`
  width: 59%;
  height: 74.6%;
  background-color: rgba(255, 255, 255, 0.5);
`;

const IconsItems = styled.View`
  width: 38%;

  height: 74.5%;

  background-color: rgba(255, 255, 255, 0.4);
  background: #1e2d3eee;
  margin-left: 2%;
`;
const ContainerApp = styled.View`
  width: 38%;
  margin-top: -450%;
  margin-left: 5%;
`;
const FlatLinks = [
  {
    id: "0",
    text: "RELATÓRIO DE PONTOS",
    icon: require("../../assets/images/meusPontos.png"),
    screen: "PointsReport",
  },
  {
    id: "1",
    text: "CURSOS EMERJ",
    icon: require("../../assets/images/cursos.png"),
    screen: "Course",
  },
  {
    id: "2",
    text: "INSERIR ATIVIDADES",
    icon: require("../../assets/images/acoesEducacionais.png"),
    screen: "Activites",
  },
  {
    id: "3",
    text: "Virtual EMERJ",
    icon: require("../../assets/images/virtualEmerj.png"),
    screen: "NotFound",
  },
  {
    id: "4",
    text: "ATENDIMENTO",
    icon: require("../../assets/images/atendimento.png"),
    screen: "NotFound",
  },
];

const ImageFlat = styled.Image`
  width: 50px;
  height: 50px;
  margin-left: 5%;
  max-width: 60%;
  max-height: 70%;
`;

const TextFlat = styled.Text`
  height: 50px;
  position: relative;
  font-size: 12px;
  font-weight: bold;
  color: #333;
  padding-left: 5%;
  padding-left: 5%;
  margin-top: 2%;
  text-align: center;
`;

interface IFlatItems {
  id: string;
  text: string;
  icon: ImageProps["source"];
  screen: any;
}

const Item = ({
  //refatorar a const Item Link to modificando css da ImageFlat
  item,
  onPress,
}: {
  item: IFlatItems;
  onPress: (event: GestureResponderEvent) => void;
}) => (
  <Link style={styles.container} to={{ screen: item.screen }}>
    <ImageFlat source={item.icon} />
    <TextFlat> {item.text}</TextFlat>
  </Link>
);

export default function HomeItemsComponents({ props }: any) {
  const [nome, setNome] = useState("");
  const [lotacao, setLotacao] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const getDados = async () => {
    try {
      const Dados = await AsyncStorage.getItem("Dados");
      if (Dados) {
        setNome(Dados);
      }
    } catch (error) {
      console.log("sem dados");
    }
  };
  const getLotacao = async () => {
    try {
      const lotacao = await AsyncStorage.getItem("Lotação");
      if (lotacao) {
        setLotacao(lotacao);
      }
    } catch (error) {
      console.log("sem dados");
    }
  };

  getDados();
  getLotacao();

  const renderItem = ({ item }: { item: IFlatItems }) => {
    return <Item item={item} onPress={() => setSelectedId(Number(item.id))} />;
  };

  return (
    <>
      <BackgroundContainer>
        <ImageBackground
          source={require("../../assets/images/background.png")}
        />
        <ContentItems>
          <FlatListItems>
            <FlatList
              data={FlatLinks}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
            />
          </FlatListItems>

          <IconsItems>
            <CardPerfilMagistrado nome={nome} lotacao={lotacao} />
            <CardConsultaEnfam />
            <CardNotificacoes />
            <ContainerApp>
              <AppLogo />
            </ContainerApp>
          </IconsItems>
        </ContentItems>
      </BackgroundContainer>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 230,
    height: 90,
    marginLeft: 4,
    backgroundColor: "#c0ccda",
    borderBottomColor: "#b8977e",
    borderBottomWidth: 10,
  },
});
