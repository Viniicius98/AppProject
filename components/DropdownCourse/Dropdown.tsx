import React from "react";
import { StyleSheet, View } from "react-native";
import CardAtividade from "../CardInserirAtividade";
import List, { List as ListModel } from "./OficialCourse";
import List2, { List2 as ListModel2 } from "./FOFO";
import List3, { List3 as ListModel3 } from "./OtherCourse";

const list: ListModel = {
  name: "Cursos Oficiais",
  items: [
    { name: "Cursos Concluídos", component: <CardAtividade /> },
    { name: "Aguardando Confirmação", component: <CardAtividade /> },
  ],
};

const list2: ListModel2 = {
  name: "FOFO",
  items: [
    { name: "Cursos Concluídos", component: <CardAtividade /> },
    { name: "Aguardando Confirmação", component: <CardAtividade /> },
  ],
};

const list3: ListModel3 = {
  name: "Outros Cursos",
  items: [
    { name: "Cursos Concluídos", component: <CardAtividade /> },
    { name: "Aguardando Confirmação", component: <CardAtividade /> },
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
