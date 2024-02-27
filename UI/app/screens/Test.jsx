import { View, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import AppTextInput from "../components/AppTextInput";

const Test = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      console.log("focus");
      inputRef.current.focus();
    }
  }, []);
  return (
    <View>
      <View className={"mt-20 items-center   "}>
        <AppTextInput
          ref={inputRef}
          // noBorder
          placeholder="Search"
          icon="search"
          materialIcons
          className={" w-80 mx-10 mr-2"}
        />
      </View>
    </View>
  );
};

export default Test;
