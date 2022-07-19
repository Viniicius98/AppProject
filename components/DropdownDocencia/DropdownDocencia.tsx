import React from "react";
import { StyleSheet, Text, View } from "react-native";
import List, { List as ListModel } from "./ListDocencia";
const list: ListModel = {
  name: "Total Points",
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
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default () => {
  return (
    <View style={styles.container}>
      {/*<Text style={styles.title}>Markets</Text>*/}
      <List {...{ list }} />
    </View>
  );
};
