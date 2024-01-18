import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import AppButton from "./AppButton";
import AppCards from "./AppCards";

const HVCardView = () => {
  const [isHorizontal, setHorizontal] = useState(false);
  const cardData = [
    {
      id: "1",
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "https://example.com/image1.jpg",
    },
    {
      id: "2",
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl: "https://example.com/image2.jpg",
    },
    {
      id: "3",
      title: "Card 3",
      description: "Description for Card 3",
      imageUrl: "https://example.com/image3.jpg",
    },
  ];
  const toggleView = () => {
    setHorizontal((prev) => !prev);
  };
  return (
    <View style={styles.container}>
      <AppButton
        style={styles.toggleButton}
        onPress={toggleView}
        title={`${
          isHorizontal ? "Switch to Vertical" : "Switch to Horizontal"
        }`}
      />
      <AppCards data={cardData} isHorizontal={isHorizontal} />
    </View>
  );
};

export default HVCardView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  toggleButton: {
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
  toggleText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
