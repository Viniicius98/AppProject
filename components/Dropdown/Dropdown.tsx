import React from "react";
import { StyleSheet, View } from "react-native";
import List, { List as ListModel } from "./ListAcoes";
import List2, { List2 as ListModel2 } from "./ListDiplomasTitles";
import List3, { List3 as ListModel3 } from "./ListDocencia";

const list: ListModel = {
  name: "Ações Educacionais",
  items: [
    { name: "CURSOS OFICIAIS REALIZADOS", screen: "Record" },
    { name: "CURSO CREDENCIADOS PELO ENFAM", screen: "Record" },
  ],
};

const list2: ListModel2 = {
  name: "Diplomas e Titulos",
  items: [
    { name: "DIPLOMA DE ESPECIALIZAÇÃO" },
    { name: "DIPLOMA DE ESPECIALIZAÇÃO ENFAM " },
    { name: "DIPLOMA DE MESTRADO" },
    { name: "DIPLOMA DE MESTRADO PROFISSIONAL" },
    { name: "DIPLOMA DE DOUTORADO" },
    { name: "DIPLOMA DE PÓS DOUTORADO" },
  ],
};

const list3: ListModel3 = {
  name: "Atuação na Doçência",
  items: [
    { name: "PRÁTICA JURISDICIONAL" },
    { name: "PUBLICAÇÕES" },
    { name: "DOCÊNCIA COM FOFO" },
    { name: "DOCÊNCIA COU OU SEM FOFO" },
  ],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#343F4B",
    padding: 9,
    marginTop: -70,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default () => {
  return (
    <View style={styles.container}>
      <List {...{ list /*list2*/ }} />
      <List2 {...{ list2 }} />
      <List3 {...{ list3 }} />
    </View>
  );
};
