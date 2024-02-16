import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AppImage from "../AppImage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Categories = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedCategoryString = await AsyncStorage.getItem("@category");
        const storedCategory = JSON.parse(storedCategoryString);
        setCategory(storedCategory);
      } catch (error) {
        console.log("Error fetching category:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {category
          ?.map((item) => (
            <View key={item._id}>
              <TouchableOpacity
                style={styles.categoryContainer}
                onPress={() =>
                  navigation.navigate("Category", { _id: item._id })
                }
              >
                <AppImage
                  source={{
                    uri: item.image.url,
                  }}
                  alt="Example Image"
                  style={styles.imgStyle}
                  noCache={false}
                />
                <View style={styles.overlay} />
                <Text style={styles.catTitle}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          ))
          .slice(0, 7)}
      </View>
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 10,
  },
  imgStyle: {
    width: 120,
    height: 120,
    borderRadius: 20,
  },
  overlay: {
    position: "absolute",
    top: 10,
    left: 0,
    width: 120,
    height: 120,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  categoryContainer: {
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
  categoryIcon: {
    fontSize: 25,
    verticalAlign: "top",
  },
  catTitle: {
    fontSize: 15,
    fontWeight: "bold",
    position: "absolute",
    bottom: 50,
    width: 100,
    textAlign: "center",
    color: "white",
  },
});
