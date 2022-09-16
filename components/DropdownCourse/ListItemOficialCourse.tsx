import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native"; // TouchableWithoutFeedback não funciona no ios

import { useNavigation } from "@react-navigation/native";
import { color } from "native-base/lib/typescript/theme/styled-system";

export const LIST_ITEM_HEIGHT = 100;
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
    fontWeight: "bold",
    color: "#343f4b",
  },
  ctn: {
    backgroundColor: "#c0ccda",
    borderBottomWidth: 10,
    borderBottomColor: "#b8977e",
    flexDirection: "row",
  },
});

export interface ListItem {
  name: string;
  component: any;
}

interface ListItemProps {
  item: ListItem;
  isLast: boolean;
  isOpen: boolean;

  btnOnClick: () => void;
}

export default ({ item, isLast }: ListItemProps) => {
  const bottomRadius = isLast ? 8 : 0;
  const navigation = useNavigation();

  return (
    <View style={[styles.container, {}]}>
      <View style={styles.ctn}>
        <Text style={styles.name}>{item.name}</Text>
      </View>

      <View>{item.component}</View>
    </View>
  );
};
