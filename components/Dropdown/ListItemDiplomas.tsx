import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LIST_ITEM_HEIGHT } from "./ListItemAcoes";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#f4f4f6",
    height: LIST_ITEM_HEIGHT,
  },
  name: {
    fontSize: 16,
  },
});

export interface ListItem {
  name: string;
}

interface ListItemProps {
  item: ListItem;
  isLast: boolean;
}

export default ({ item, isLast }: ListItemProps) => {
  return (
    <View
      style={[
        styles.container,
        /*{
          borderBottomLeftRadius: bottomRadius,
          borderBottomRightRadius: bottomRadius,
        },*/
      ]}
    >
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
};
