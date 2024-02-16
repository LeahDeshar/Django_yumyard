import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
const Header = () => {
  const [searchText, setSearchText] = useState("");
  //funciotn for search
  const handleSearch = () => {
    console.log(searchText);
    setSearchText("");
  };
  return (
    <View>
      <Image
        source={require("../assets/bg3.png")}
        style={{ width: 430, height: 260, resizeMode: "cover" }}
      />
      <View className={" absolute top-20 mt-2 left-8 "}>
        <View className={"flex-row items-center   "}>
          <AppTextInput
            // noBorder
            placeholder="Search"
            icon="search"
            materialIcons
            className={"w-80 mr-2"}
          />
          <Image
            source={require("../assets/driverAvatar.png")}
            style={{
              borderRadius: 50,
              width: 50,
              height: 50,
            }}
          />
        </View>
        <AppText className={"text-4xl font-semibold mt-8 pt-3 pl-2"}>
          Good Morning!
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  inputBox: {
    borderWidth: 0.3,
    width: "100%",
    position: "absolute",
    left: 15,
    height: 40,
    color: "#000000",
    backgroundColor: "#ffffff",
    paddingLeft: 10,
    fontSize: 16,
    borderRadius: 5,
  },
  searchBtn: {
    position: "absolute",
    left: "95%",
  },
  icon: {
    color: "#000000",
    fontSize: 18,
  },
});

export default Header;
