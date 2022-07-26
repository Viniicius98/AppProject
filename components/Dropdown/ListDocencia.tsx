import React, { useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

//import Animated, { Easing } from "react-native-reanimated";
//import { bInterpolate, bin, useTransition } from "react-native-redash";

//import Chevron from "./Chevron";
import Item, { ListItem } from "./ListItemDocencia";

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

    /*marginTop: 16,
    backgroundColor: "white",
    padding: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"*/
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  items: {
    overflow: "hidden",
  },
});

export interface List3 {
  name: string;
  items: ListItem[];
}

interface ListProps {
  list3: List3;
}

export default ({ list3 }: ListProps) => {
  const [open, setOpen] = useState(false);

  const height = open ? "auto" : 0;
  const bottomRadius = open ? 0 : 8;
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setOpen((prev) => !prev)}>
        <View
          style={[
            styles.container,
            {
              /*borderBottomLeftRadius: bottomRadius,
              borderBottomRightRadius: bottomRadius*/
            },
          ]}
        >
          <Text style={styles.title}>ATUAÇÃO NA DOCÊNCIA</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={[styles.items, { height }]}>
        {list3.items.map((item, key) => (
          <Item {...{ item, key }} isLast={key === list3.items.length - 1} />
        ))}
      </View>
    </>
  );
};
