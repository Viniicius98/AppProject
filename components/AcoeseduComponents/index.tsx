import React, { useState } from "react";
import styled from "styled-components/native";
import { Link } from "@react-navigation/native";
import { FlatList, GestureResponderEvent, Image } from "react-native";
import CardAcao from "../CardAcao";
import AcoesEdu from "../Dropdown/Dropdown";

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
  position: absolute;
  z-index: 0;
  opacity: 0.3;
`;

const ContentItems = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: flex-end;
`;
const FlatListItems = styled.View`
  width: 100%;
  height: 450px;
`;

const IconsItems = styled.View`
  width: 100%;
  height: 575px;
  margin-left: -68%;
`;

const FlatLinks = [
  {
    id: "3",
    text: "AÇÕES EDUCACIONAIS",
    icon: "virtualEmerj.png",
    screen: "VirtualEmerjScreen",
  },
  {
    id: "4",
    text: "DIPLOMAS E TÍTULOS",
    icon: "atendimento.png",
    screen: "AttendanceScreen",
  },
  {
    id: "5",
    text: "ATUAÇÃO NA DOCÊNCIA",
    icon: "atendimento.png",
    screen: "AttendanceScreen",
  },
];

const ImageFlatLinks = styled.Image`
  width: 50px;
  height: 80px;
  margin-left: 25%;
  max-width: 20%;
  max-height: 80%;
`;

const IdImage = styled.Image`
  width: 50px;
  height: 80px;
  margin-left: 25%;
  max-width: 20%;
  max-height: 80%;
`;

const TextFlatLinks = styled.Text`
  font-size: 15px;
  color: #343f4b;
  margin-left: 4%;
  font-weight: bold;
`;

const ButtonCustom = styled.TouchableOpacity`
  background: #ffffff;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
  flex-direction: row;
  width: 100%;
  height: 50px;
  margin-top: 2%;
  align-items: center;
`;

interface IFlatItems {
  id: string;
  text: string;
  icon: string;
  screen: string;
}

const Item = ({
  item,
  onPress,
}: {
  item: IFlatItems;
  onPress: (event: GestureResponderEvent) => void;
}) => (
  <ButtonCustom onPress={onPress}>
    <TextFlatLinks>{item.text}</TextFlatLinks>
  </ButtonCustom>
);

export default function AcoeseduComponents() {
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
            <AcoesEdu />
          </FlatListItems>

          <IconsItems>
            <CardAcao />
          </IconsItems>
        </ContentItems>
      </BackgroundContainer>
    </>
  );
}

/*{<ImageBackground source={require('../../assets/images/background.jpg')}/>}*/
