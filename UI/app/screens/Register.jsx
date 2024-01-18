import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import AppImage from "../components/AppImage";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");

  const handleRegister = () => {
    if (!email || !password || !name || !address || !city || !contact) {
      return alert("Please enter your information");
    }
    alert("Registered Successfully");
    navigation.navigate("Login");
  };
  return (
    <Screen backgroundColor="white" noSafeArea>
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
      <AppTextInput
        label="Enter Your Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <AppTextInput
        label="Enter Your Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
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
          onPress={handleRegister}
          title={"Register"}
        />

        <Text>
          Already Have Account?{" "}
          <Text
            onPress={() => navigation.navigate("login")}
            style={styles.link}
          >
            Login
          </Text>
        </Text>
      </View>
    </Screen>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
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
