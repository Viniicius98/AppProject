import React, { useState } from "react";
import { View, Text, Button, Modal, StyleSheet } from "react-native";
import styled from "styled-components/native";

const BackgroundContainer = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const ContainerSubscription = styled.TouchableOpacity`
  width: 30%;
  height: 8%;
  background: #b9977e;
  margin-top: 107%;
  margin-left: 60%;
  border-radius: 10px;
  border-radius-bottom: 10px;
  align-items: center;
  justify-content: center;
`;

const Subscription = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: white;
`;

const ContainerModal = styled.View`
  width: 90%;
  height: 50%;
  margin-top: 50%;
  margin-left: 4%;
  border-radius: 10px;
  background: #fff;
`;
const ContainerModalTitle = styled.View`
  width: 100%;
  height: 10%;
  background: #c0ccda;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
  align-items: flex-start;
  border-radius: 10px;
`;
const ModalTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
  padding-top: 1%;
  padding-left: 5%;
  color: #343f4b;
`;

const ContainerDescription = styled.View`
  position: absolute;
  width: 90%;
  height: 95%;
  margin-top: 20%;
  margin-left: 5%;
  background: #d9d9d9;
  align-items: center;
`;
const Description = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;
const ContainerClose = styled.View`
  width: 30%;
  margin-left: 60%;
  margin-top: 102%;
`;

export default function () {
  const [visivel, setVisivel] = useState(false);

  return (
    <BackgroundContainer>
      <Modal animationType="slide" transparent={true} visible={visivel}>
        <ContainerModal>
          <ContainerModalTitle>
            <ModalTitle>Inscreva-se</ModalTitle>
          </ContainerModalTitle>

          <ContainerDescription>
            <Description>Cordenação:José Maria de Castro</Description>
          </ContainerDescription>
          <ContainerClose>
            <Button
              title="Fechar"
              color="#343f4b"
              onPress={() => {
                setVisivel(false);
              }}
            />
          </ContainerClose>
        </ContainerModal>
      </Modal>
      <ContainerSubscription
        onPress={() => {
          setVisivel(true);
        }}
      >
        <Subscription>Inscreva-se</Subscription>
      </ContainerSubscription>
    </BackgroundContainer>
  );
}

const estilo = StyleSheet.create({
  modal: {
    backgroundColor: "#fff",
    margin: 20,
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  textModal: {
    color: "#000",
  },
  butao: {},
});
