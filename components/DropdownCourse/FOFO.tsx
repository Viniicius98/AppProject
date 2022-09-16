import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from "react-native"; // TouchableWithoutFeedback não funciona no ios
import Item, { ListItem } from "./ListItemFOFO";

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
  const [currentIdx, setCurrentIdx] = useState(-1);
  const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };
  const height = open ? "auto" : 0;
  const bottomRadius = open ? 0 : 8;
  return (
    <>
      <TouchableHighlight onPress={() => setOpen((open) => !open)}>
        <View style={[styles.container]}>
          <Text style={styles.title}> FOFO - FORMAÇÃO DE FORMADORES</Text>
        </View>
      </TouchableHighlight>
      <View style={[styles.items, { height }]}>
        {list2.items.map((item, idx) => (
          <Item
            key={idx}
            item={item}
            isOpen={idx === currentIdx}
            isLast={idx === list2.items.length - 1}
            btnOnClick={() => btnOnClick(idx)}
          />
        ))}
      </View>
    </>
  );
};
