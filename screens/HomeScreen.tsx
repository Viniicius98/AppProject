import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext, useEffect } from "react";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import HomeItemsComponents from "../components/HomeItemsComponents";
import biometricAuth from "../utils/local-authentication";
import { InputValueContext } from "../context/InputValueContext";
import Header from "../components/Header";
import BackButton from "../components/BackButton";

import { useNavigation } from "@react-navigation/native";

const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: -8.4%;
  border-bottom-width: 10px;
  border-bottom-color: #b8977e;
`;

export default function HomeScreen(
  { navigation }: RootTabScreenProps<"Home">,
{ props }: any 
 ) {
  const { state, dispatch } = useContext(InputValueContext);

  
  return (
    <Container>
      <Header />
      

      <HomeItemsComponents />
    </Container>
  );
}

//terirado de dentro do Container
/*<View>
        <Text>Valor: {state.inputValue}</Text>
      </View>
      <Button
       title="Login"
       color="#1e2d3e"

       onPress={authLocal}
       />

      <Button
       title="Mudar valor"
       color="#1e2d3e"
       onPress={()=> dispatch({type:"SET_INPUT_VALUE_TO_200"}) }
       />*/
