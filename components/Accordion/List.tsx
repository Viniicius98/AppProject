import React, { useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

//import Animated, { Easing } from "react-native-reanimated";
//import { bInterpolate, bin, useTransition } from "react-native-redash";

import Chevron from "./Chevron";
import Item, { LIST_ITEM_HEIGHT, ListItem } from "./ListItem";

const bit = ( b: boolean ) => (b ? 1 : 0) ;
const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    backgroundColor: "white",
    padding: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 16,
    fontWeight: "bold"
  },
  items: {
    overflow: "hidden"
  }
});

export interface List {
  name: string;
  items: ListItem[];
}

interface ListProps {
  list: List;
}

export default ({ list }: ListProps) => {
  const [open, setOpen] = useState(false);
  
  const height = open ? "auto" : 0;
  const bottomRadius = open ? 0 : 8;
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setOpen(prev => !prev)}>
        <View
          style={[
            styles.container,
            {
              borderBottomLeftRadius: bottomRadius,
              borderBottomRightRadius: bottomRadius
            }
          ]}
        >
          <Text style={styles.title}>Total Points</Text>
          <Chevron {...{ open }} />
        </View>
      </TouchableWithoutFeedback>
      <View style={[styles.items, { height }]}>
        {list.items.map((item, key) => (
          <Item {...{ item, key }} isLast={key === list.items.length - 1} />
        ))}
      </View>
    </>
  );
};
