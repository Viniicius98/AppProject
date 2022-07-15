import React from "react";
import { StyleSheet, Text, View } from "react-native";
import List, { List as ListModel } from "./List";

const list: ListModel = {
  name: "AÇÕES EDUCACIONAIS",
  items: [
    { name: "CURSOS OFICIAIS REALIZADOS" },
    { name: "CURSOS CREDENCIADOS PELA ENFAM" },
  ],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f6",
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default () => {
  return (
    <View style={styles.container}>
      {/*<Text style={styles.title}>AÇÕES EDUCACIONAIS</Text>*/}
      <List {...{ list }} />
      <List {...{ list }} />
      {/*<List {...{ list }} />
      <List {...{ list }} />
      <List {...{ list }} />
      <List {...{ list }} />*/}
    </View>
  );
};
