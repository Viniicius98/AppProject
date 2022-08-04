import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link } from "@react-navigation/native";

export const LIST_ITEM_HEIGHT = 54;
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
  screen: any;
}

interface ListItemProps {
  item: ListItem;
  isLast: boolean;
  isOpen: boolean;
  btnOnClick: () => void;
}

export default ({ item, isLast }: ListItemProps) => {
  const bottomRadius = isLast ? 8 : 0;
  return (
    <View style={[styles.container, {}]}>
      <TouchableOpacity>
        <Link to={{screen: item.screen }}>
             <Text style={styles.name}>{item.name}</Text>
        </Link>
      </TouchableOpacity>
      
    </View>
  );
};
