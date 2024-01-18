import React from "react";
import { View, FlatList, Image, Text, StyleSheet } from "react-native";

// const data = [
//   {
//     id: "1",
//     title: "Card 1",
//     description: "Description for Card 1",
//     imageUrl: "https://example.com/image1.jpg",
//   },
//   {
//     id: "2",
//     title: "Card 2",
//     description: "Description for Card 2",
//     imageUrl: "https://example.com/image2.jpg",
//   },
//   {
//     id: "3",
//     title: "Card 3",
//     description: "Description for Card 3",
//     imageUrl: "https://example.com/image3.jpg",
//   },
// ];

const AppCards = ({ data, isHorizontal }) => {
  const renderItem = ({ item }) => (
    <View style={[styles.card, isHorizontal && styles.horizontalCard]}>
      <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={isHorizontal}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
  },
  cardImage: {
    height: 200,
    resizeMode: "cover",
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
  },
  card: {
    marginBottom: 16,
  },
  horizontalCard: {
    width: 250,
    marginRight: 16,
  },
});

export default AppCards;
