import React, { useState } from "react";
import styled from "styled-components/native";
import { FlatList, GestureResponderEvent, ImageProps } from "react-native";
import Card from "../../components/Card";
import CardConsulta from "../../components/CardConsulta";
import CardVerificar from "../../components/CardVerificar";
import {
  Link,
 
} from "@react-navigation/native";



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
  height: 100%;
  flex-direction: row;
  align-items: flex-end;
`;
const FlatListItems = styled.View`
  width: 60%;
  height: 450px;
  background-color: rgba(255, 255, 255, 0.5);
`;

const IconsItems = styled.View`
  width: 38%;
  height: 450px;
  background-color: rgba(255, 255, 255, 0.4);
  margin-left: 2%;
`;
const FlatLinks = [
  {
    id: "0",
    text: "RELATÓRIO DE PONTOS",
    icon: require("../../assets/images/meusPontos.png"),
    screen: "Chat",
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
    screen: "Chat",
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

const ImageFlatLinks = styled.Image`
  width: 70px;
  height: 80px;
  margin-left: 3%;
  max-width: 60%;
  max-height: 70%;
`;

const TextFlatLinks = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #333;
  margin-left: 3%;
`;

const ButtonCustom = styled.TouchableOpacity`
  background: #c0ccda;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

interface IFlatItems {
  id: string;
  text: string;
  icon: ImageProps["source"];
  screen: any;
}

const Item = ({
  item,
  onPress,
}: {
  item: IFlatItems;
  onPress: (event: GestureResponderEvent) => void;
}) => (
  <ButtonCustom onPress={onPress}>
    <Link to={{screen:item.screen}} key ={item.id}>

      <ImageFlatLinks source={item.icon} />
      <TextFlatLinks>{item.text}</TextFlatLinks>
    </Link>
  </ButtonCustom>
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
            <Card />
            <CardConsulta />
            <CardVerificar />
          </IconsItems>
        </ContentItems>
      </BackgroundContainer>
    </>
  );
}
