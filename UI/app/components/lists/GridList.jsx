import React from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
const columns = 2;

const data = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
  { id: "4", title: "Item 4" },
];
const GridList = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={columns}
      />
    </View>
  );
};

export default GridList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    height: 100, // Adjust the height based on your design
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
});
