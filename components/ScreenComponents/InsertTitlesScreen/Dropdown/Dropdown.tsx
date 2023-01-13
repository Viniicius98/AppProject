import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import List, { List as ListModel } from "./ListAcoes";
import List2, { List2 as ListModel2 } from "./ListDiplomasTitles";
import List3, { List3 as ListModel3 } from "./ListDocencia";

const list: ListModel = {
  name: "Ações Educacionais",
  items: [
    {
      name: "CURSOS OFICIAIS REALIZADOS",
      screen: "ActionRecord",
      category: "1",
      activities: "1",
    },
    {
      name: "CURSO CREDENCIADOS PELO ENFAM",
      screen: "ActionRecord",
      category: "1",
      activities: "2",
    },
  ],
};

const list2: ListModel2 = {
  name: "Diplomas e Titulos",
  items: [
    {
      name: "DIPLOMA DE ESPECIALIZAÇÃO",
      screen: "TitlesRecord",
      category: "2",
      activities: "3",
    },
    {
      name: "DIPLOMA DE ESPECIALIZAÇÃO ENFAM ",
      screen: "TitlesRecord",
      category: "2",
      activities: "4",
    },
    {
      name: "DIPLOMA DE MESTRADO",
      screen: "TitlesRecord",
      category: "2",
      activities: "5",
    },
    {
      name: "DIPLOMA DE MESTRADO PROFISSIONAL",
      screen: "TitlesRecord",
      category: "2",
      activities: "6",
    },
    {
      name: "DIPLOMA DE DOUTORADO",
      screen: "TitlesRecord",
      category: "2",
      activities: "7",
    },
    {
      name: "DIPLOMA DE PÓS DOUTORADO",
      screen: "TitlesRecord",
      category: "2",
      activities: "8",
    },
  ],
};

const list3: ListModel3 = {
  name: "Atuação na Doçência",
  items: [
    {
      name: "PRÁTICA JURISDICIONAL",
      screen: "Publication",
      category: "3",
      activities: "9",
    },
    {
      name: "PUBLICAÇÕES",
      screen: "Publication",
      category: "3",
      activities: "10",
    },
    {
      name: "DOCÊNCIA COM FOFO",
      screen: "Publication",
      category: "3",
      activities: "11",
    },
    {
      name: "DOCÊNCIA COM OU SEM FOFO",
      screen: "Publication",
      category: "3",
      activities: "12",
    },
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
      <ScrollView style={{}}>
        <List {...{ list /*list2*/ }} />
        <List2 {...{ list2 }} />
        <List3 {...{ list3 }} />
      </ScrollView>
    </View>
  );
};
