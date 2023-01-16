import {
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  ScrollViewBase,
  Platform,
  Alert,
} from "react-native";
import styled from "styled-components/native";
import CardAtividade from "../components/Cards/CardInserirAtividade";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

const BackgroundContainer = styled.View`
  flex: 1;
  background: #1e2d3eee;
`;

const ImageBackground = styled.Image`
  height: 15%;
  width: 100%;
  align-items: center;
  justify-content: center;
  z-index: 0;
  opacity: 0.3;
`;

const ContentItems = styled.View`
  flex: 2;
  align-items: center;
`;

const BackForm = styled.View`
  width: 90%;
  height: 100%;
  align-items: center;
  background-color: #fff;
`;
const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #333;
  margin-top: 6px;
  margin-right: 70%;
  color: #343f4b;
`;
const ContainerCourse = styled.View`
  background: #c0ccda;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
  border-top-width: 10px;
  border-top-color: #b8977e;
  width: 100%;
  height: 55px;
  align-items: center;
  margin-top: 2%;
`;

const TypeCourse = styled.Text`
  width: 100%;
  height: 100%;
  font-size: 15px;
  font-weight: bold;
  color: #333;
  padding-top: 2%;
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
  margin-top: 100%;
  padding-left: 60%;
  padding-top: 0%;
  padding-right: 4%;
`;

const SubmitButton = styled.Button`
  width: 50x;
  height: 50px;
  color: #343f4b;
`;

const schema = yup.object({
  coursename: yup.string().required("Informe o Nome do Curso"),
  institution: yup.string().required("Informe o Nome da Instituição"),
  workload: yup
    .number()
    .min(1, "Não pode haver Carga Horaria Menor que 1 Hora")
    .max(10, "Não pode haver Carga Horaria Maior que 10 Horas")
    .required("Informe a Quantidade de Horas "),
});

export default function ActionRecord({ route }: any) {
  const [token, setToken] = useState("");

  const getToken = async () => {
    try {
      const BToken = await AsyncStorage.getItem("@BToken");
      const BToken2 = BToken?.substring(16, BToken.length - 2);
      if (BToken2) {
        setToken(BToken2);
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível pegar o token");
    }
  };

  useEffect(() => {
    getToken();
  }, [token]);

  const types = route.params.nome;
  const categoria = route.params.categoria;
  const atividade = route.params.atividades;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      coursename: "",
      institution: "",
      workload: "",
      type: types,
      category: categoria,
      activities: atividade,
    },
    resolver: yupResolver(schema),
  });

  function handleSignIn(data: Object) {
    try {
      console.log(data);
      Alert.alert("Registrado com Sucesso");
    } catch (error) {
      console.error(error);
      Alert.alert("Não foi possivel enviar os dados");
    }
  }

  return (
    <>
      <BackgroundContainer>
        <CardAtividade />
        <ImageBackground source={require("../assets/images/background.png")} />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <ScrollView>
            <ContentItems>
              <BackForm>
                <Title>CURSOS</Title>
                <ContainerCourse>
                  <TypeCourse>{route.params.nome}</TypeCourse>
                </ContainerCourse>

                <InputContainer>
                  <Controller
                    control={control}
                    name="category"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        style={[
                          styles.input,
                          {
                            display: "none",
                          },
                        ]}
                        onChangeText={onChange}
                        onBlur={onBlur} // chamado quando o Input é tocado
                        value={value}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name="activities"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        style={[
                          styles.input,
                          {
                            display: "none",
                          },
                        ]}
                        onChangeText={onChange}
                        onBlur={onBlur} // chamado quando o Input é tocado
                        value={value}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name="type"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        style={[
                          styles.input,
                          {
                            display: "none",
                          },
                        ]}
                        onChangeText={onChange}
                        onBlur={onBlur} // chamado quando o Input é tocado
                        value={value}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name="coursename"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        style={[
                          styles.input,
                          {
                            borderWidth: errors.coursename && 1,
                            borderColor: errors.coursename && "#ff375b",
                          },
                        ]}
                        onChangeText={onChange}
                        onBlur={onBlur} // chamado quando o Input é tocado
                        value={value}
                        placeholder="NOME DO CURSO"
                      />
                    )}
                  />
                  {errors.coursename && (
                    <Text style={styles.labelError}>
                      {errors.coursename?.message}
                    </Text>
                  )}

                  <Controller
                    control={control}
                    name="institution"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        style={[
                          styles.input,
                          {
                            borderWidth: errors.institution && 1,
                            borderColor: errors.institution && "#ff375b",
                          },
                        ]}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder="INSTITUIÇÃO"
                      />
                    )}
                  />
                  {errors.institution && (
                    <Text style={styles.labelError}>
                      {errors.institution?.message}
                    </Text>
                  )}
                  <Controller
                    control={control}
                    name="workload"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        style={[
                          styles.input,
                          {
                            borderWidth: errors.workload && 1,
                            borderColor: errors.workload && "#ff375b",
                          },
                        ]}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder="CARGA HORÁRIA"
                      />
                    )}
                  />
                  {errors.workload && (
                    <Text style={styles.labelError}>
                      {errors.workload?.message}
                    </Text>
                  )}
                </InputContainer>

                <ContainerSubmitButton>
                  <SubmitButton
                    onPress={handleSubmit(handleSignIn)}
                    title="Registrar"
                    color="#B8977E"
                  />
                </ContainerSubmitButton>
              </BackForm>
            </ContentItems>
          </ScrollView>
        </KeyboardAvoidingView>
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
  container: {
    flex: 2,
  },
});
