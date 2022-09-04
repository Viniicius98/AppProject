import React, { useState } from "react";
import styled from "styled-components/native";
import { FlatList, GestureResponderEvent, ImageProps, TouchableHighlight } from "react-native";
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
  width: 100%;
  height: 83%;
  flex-direction: row;
  align-items: flex-end;
`;
const FlatListItems = styled.View`
  width: 60%;
  height: 464px;
  background-color: rgba(255, 255, 255, 0.5);
`;

const IconsItems = styled.View`
  width: 38%;
  height: 464px;
  background-color: rgba(255, 255, 255, 0.4);
  background: #1e2d3eee;
  margin-left: 2%;
`;
const ContainerApp = styled.View`
  width: 38%;
  height: 60px;
  margin-top: -450%;
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
    screen: "Chat",
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
    screen: "Chat",
  },
  {
    id: "4",
    text: "ATENDIMENTO",
    icon: require("../../assets/images/atendimento.png"),
    screen: "Chat",
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

const ButtonCustom = styled.TouchableOpacity`
  background: #c0ccda;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
  flex-direction: row;
  width: 100%;
  height: 90px;
  align-items: center;
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

export default function HomeItemsComponents() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

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
            <CardPerfilMagistrado />
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
