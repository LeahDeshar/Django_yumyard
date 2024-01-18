import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppImage from "../components/AppImage";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const handleLogin = () => {
    if (!email || !password) {
      return alert("Please enter your information");
    }
    alert("Login Successfully");
    navigation.navigate("Register");
  };

  return (
    <Screen backgroundColor="white" noKeyboardAwareScroll noSafeArea>
      <AppImage
        source={{
          uri: "https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg",
        }}
        alt="Your Alt Text"
        style={styles.image}
        contain={true}
      />

      <AppTextInput
        label="Enter Your Email"
        autoComplete="email"
        value={email}
        onChangeText={setEmail}
      />

      <AppTextInput
        label="Enter Your Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.btnContainer}>
        <AppButton
          style={styles.loginBtn}
          onPress={handleLogin}
          title={"Login"}
        />

        <Text>
          Don't Have Account?{" "}
          <Text
            onPress={() => navigation.navigate("Register")}
            style={styles.link}
          >
            Register
          </Text>
        </Text>
      </View>
    </Screen>
  );
};

export default Login;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
  },
  loginBtn: {
    backgroundColor: "#000",
    width: "80%",
    justifyContent: "center",
    height: 40,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtnText: {
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: 18,
  },
  link: {
    color: "red",
  },
});
