import React from "react";
import { StyleSheet, Text, View } from "react-native";
import List, { List as ListModel } from "./ListDiplomasTitles";
const list: ListModel = {
  name: "Total Points",
  items: [
    { name: "DIPLOMA DE ESPECIALIZAÇÃO" },
    { name: "DIPLOMA DE ESPECIALIZAÇÃO ENFAM " },
    { name: "DIPLOMA DE MESTRADO" },
    { name: "DIPLOMA DE MESTRADO PROFISSIONAL" },
    { name: "DIPLOMA DE DOUTORADO" },
    { name: "DIPLOMA DE PÓS DOUTORADO" },
   
  ]
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#343F4B",
    padding: 9
  },
  title: {
    fontSize: 32,
    fontWeight: "bold"
  }
});

export default () => {
  return (
    <View style={styles.container}>
      {/*<Text style={styles.title}>Markets</Text>*/}
      <List {...{ list }} />
      
      
    </View>
  );
};
