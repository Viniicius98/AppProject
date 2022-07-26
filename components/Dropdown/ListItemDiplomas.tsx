import React from "react";
import { StyleSheet, Text, View } from "react-native";


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
    
  },
  name: {
    fontSize: 16
  },
 
  points: {
    color: "white",
    fontWeight: "bold"
  }
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
    <View style={[styles.container,{}]}>
      
      <Text style={styles.name}>{item.name}</Text>
      
    </View>
  );
};
