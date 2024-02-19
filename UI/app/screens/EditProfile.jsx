import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import DefaultProfileImage from "../components/DefaultProfileImage";
import AppButton from "../components/AppButton";

const EditProfile = () => {
  const [username, setUsername] = useState("");
  const [website, setWebsite] = useState("");
  const [bio, setBio] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <Screen noSafeArea={false} className={"mx-5"}>
      <View className={"justify-center items-center h-100 mt-3"}>
        <TouchableOpacity>
          <DefaultProfileImage name={"George Smith"} />
        </TouchableOpacity>
      </View>
      <AppTextInput
        label="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <AppTextInput
        label="Website"
        value={website}
        onChangeText={(text) => setWebsite(text)}
      />
      <AppTextInput
        label="Bio"
        value={bio}
        onChangeText={(text) => setBio(text)}
      />
      <Text className={"text-grey text-xs text-center mt-2"}>
        Add a short bio to tell the KS community more about yourself. What's
        your favorite dish? Why do you love to cook? We'd love to know!
      </Text>
      <AppTextInput
        label="Birthday"
        value={birthday}
        onChangeText={(text) => setBirthday(text)}
      />
      <AppTextInput
        label="Gender"
        value={gender}
        onChangeText={(text) => setGender(text)}
      />
      <Text className={"text-grey text-xs text-center mt-2"}>
        Your data privacy is important to us. Read our terms of use and privacy
        notice here.
      </Text>
      <AppTextInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={secureTextEntry}
        setSecureTextEntry={setSecureTextEntry}
      />
      <AppButton title={"Save Changes"} className={"mt-5"} />
      <AppButton
        title={"Delete Account"}
        className={"mt-5 "}
        color="bg-prim"
        textColor="text-white"
      />
    </Screen>
  );
};

export default EditProfile;
