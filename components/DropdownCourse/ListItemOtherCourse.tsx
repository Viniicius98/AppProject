import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

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
  component: any;
}

interface ListItemProps {
  item: ListItem;
  isLast: boolean;
}

export default ({ item, isLast }: ListItemProps) => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight>
      <View style={[styles.container, {}]}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );
};
