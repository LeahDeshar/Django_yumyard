import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "./routes";
import defaultStyles from "../config/styles";
import { animation } from "../config/animation";
import HomeTabNavigator from "./HomeTabNavigator";
import { Place } from "../utils/constants";
import React from "react";
import Register from "../screens/Register";
import Login from "../screens/Login";
import Test from "../screens/Test";
import EditProfile from "../screens/EditProfile";
import RecipeScreen from "../screens/RecipeScreen";

export default function AppNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: defaultStyles.headerStyle,
        headerShown: false,
        animation,
      }}
    >
      <Stack.Screen component={HomeTabNavigator} name={"home"} />
      <Stack.Screen component={Register} name={"Register"} />
      <Stack.Screen component={Login} name={"Login"} />
      <Stack.Screen component={Test} name={"Test"} />
      <Stack.Screen component={RecipeScreen} name={"recipedetails"} />
      <Stack.Screen
        component={EditProfile}
        name={"Edit"}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
