import React, { useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Item, { ListItem } from "./ListItemDiplomas";

const bit = (b: boolean) => (b ? 1 : 0);
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 4,
    backgroundColor: "white",
    borderBottomWidth: 10,
    borderBottomColor: "#B8977E",
    flexDirection: "row",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  items: {
    overflow: "hidden",
  },
});

export interface List2 {
  name: string;
  items: ListItem[];
}

interface ListProps {
  list2: List2;
}

export default ({ list2 }: ListProps) => {
  const [open, setOpen] = useState(false);

  const height = open ? "auto" : 0;
  const bottomRadius = open ? 0 : 8;
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setOpen((prev) => !prev)}>
        <View style={[styles.container]}>
          <Text style={styles.title}>DIPLOMAS E TÍTULOS</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={[styles.items, { height }]}>
        {list2.items.map((item, key) => (
          <Item {...{ item, key }} isLast={key === list2.items.length - 1} />
        ))}
      </View>
    </>
  );
};
