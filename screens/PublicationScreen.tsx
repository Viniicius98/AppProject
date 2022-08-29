import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import CardAtividade from "../components/CardInserirAtividade";
import Header from "../components/Header";
import AppLogo from "../components/Header/Applogo";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RadioButton } from "react-native-paper";

const BackgroundContainer = styled.View`
  height: 100%;
  width: 100%;
  margin-top: 9%;
  background: #1e2d3eee;
`;

const ImageBackground = styled.Image`
  height: 22%;
  width: 100%;
  margin-top: 2%;
  align-items: center;
  justify-content: center;
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
  height: 75%;
  padding-right: -10%;
`;

const IconsItems = styled.View`
  width: 100%;
  height: 78%;
  margin-top: -9%;
  margin-left: -60%;
  margin-bottom: 58.7%;
`;
const ListItems = styled.View`
  width: 90%;
  height: 450px;
  margin-left: 6%;
  margin-top: -70%;
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
const TextoCursos2 = styled.Text`
  width: 100%;
  height: 100%;
  font-size: 15px;
  font-weight: bold;
  color: #333;
  padding-top: 3%;
  padding-left: 5%;
  margin-top: 0px;
  color: #343f4b;
`;
const InputContainer = styled.View`
  margin-top: 30%;
  position: absolute;
`;

const Input = styled.TextInput`
  height: 50px;
  width: 320px;
  max-height: 50px;
  max-width: 320px;
  background-color: #e0e6ed;
  border: none;
  background: #fff;
  padding-left: 20px;
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
const ConteinerHeader = styled.View`
  width: 100%;
  height: 20%;
  margin-top: -18%;
  margin-left: 0%;
`;
const ConteinerApp = styled.View`
  width: 100%;
  height: 20%;
  margin-top: -100%;
  margin-left: 65%;
`;

const schema = yup.object({
  scientificwork: yup.string().required("Informe o Nome do Curso"),
  magazinename: yup.string().required("Informe o Nome da Instituição"),
});

export default function Publication({ route }: any) {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleSignIn(data: Object) {
    console.log(data, "Tipo " + route.params.nome);
  }

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
              <TextoCursos>ATUAÇÃO NA DOCÊNCIA</TextoCursos>
              <TitleCustom>
                <SubTitleCustom>
                  <TextoCursos2>{route.params.nome}</TextoCursos2>
                </SubTitleCustom>
              </TitleCustom>
              <InputContainer>
                <Controller
                  control={control}
                  name="type"
                  render={({ field: { value, onBlur, onChange } }) => (
                    <Input
                      onBlur={onBlur}
                      defaultValue={route.params.nome}
                      value={value}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="scientificwork"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      style={[
                        styles.input,
                        {
                          borderWidth: errors.scientificwork && 1,
                          borderColor: errors.scientificwork && "#ff375b",
                        },
                      ]}
                      onChangeText={onChange}
                      onBlur={onBlur} // chamado quando o Input é tocado
                      value={value}
                      placeholder="NOME DO TRABALHO CIÊNTIFÍCO"
                    />
                  )}
                />
                {errors.scientificwork && (
                  <Text style={styles.labelError}>
                    {errors.scientificwork?.message}
                  </Text>
                )}

                <Controller
                  control={control}
                  name="magazinename"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      style={[
                        styles.input,
                        {
                          borderWidth: errors.magazinename && 1,
                          borderColor: errors.magazinename && "#ff375b",
                        },
                      ]}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholder="NOME DA REVISTA"
                    />
                  )}
                />
                {errors.magazinename && (
                  <Text style={styles.labelError}>
                    {errors.magazinename?.message}
                  </Text>
                )}

                <Text> Radio Buttons Example</Text>
              </InputContainer>

              <ContainerSubmitButton>
                <SubmitButton
                  onPress={handleSubmit(handleSignIn)}
                  title="Registrar"
                  color="#B8977E"
                />
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
      </BackgroundContainer>
    </>
  );
}

const styles = StyleSheet.create({
  input: {},
  labelError: {
    alignSelf: "flex-start",
    color: "#ff375b",
    marginBottom: 8,
  },
});
