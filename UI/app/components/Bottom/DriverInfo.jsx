import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
const DriverInfo = () => {
  return (
    <View style={styles.container}>
      <View>
        {/* <Image source={require('../assets/john.png')} style={styles.images}/> */}
      </View>
      <View>
        <Text style={styles.title}>John Doe</Text>
        <View style={styles.subtitleContainer}>
          <Icon name="location-on" size={18} color="#FF3B9D" />
          <Text style={styles.subtitle}>800m (5 min away)</Text>
        </View>
        <View style={styles.subtitleContainer}>
          <Icon name="star" size={18} color="orange" />
          <Text style={styles.subtitle}>4.9 (531 reviews)</Text>
        </View>
      </View>

      <View>
        <Image source={require("../assets/boke.png")} style={styles.images2} />
      </View>
    </View>
  );
};

export default DriverInfo;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 7,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  images: {
    width: 90,
    height: 90,
  },
  images2: {
    width: 130,
    height: 100,
    resizeMode: "contain",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    paddingVertical: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "grey",
    paddingVertical: 3,
  },
  subtitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
