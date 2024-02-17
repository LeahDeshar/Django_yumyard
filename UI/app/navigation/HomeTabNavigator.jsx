import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import routes from "./routes";
import defaultStyles from "../config/styles";
// import HomeScreen from "../screens/HomeScreen";
// import SettingsScreen from "../screens/SettingsScreen";
import HistoryScreen from "../screens/HistoryScreen";
import colors from "../config/colors";
import ChatScreen from "../screens/ChatScreen";
import MainScreen from "../screens/MainScreen";
import AccountScreen from "../screens/AccountScreen";
import Test from "../screens/Test";
import AddRecipeScreen from "../screens/AddRecipeScreen";

const tabProfileIcon = ({ color, size }) => (
  <Ionicons name="person-outline" size={size} color={color} />
);
const tabHistoryIcon = ({ color, size }) => (
  <MaterialCommunityIcons color={color} name="heart-outline" size={size} />
);

const tabSearchIcon = ({ color, size }) => (
  <Ionicons color={color} name="search" size={size} />
);
const tabHomeIcon = ({ color, size }) => (
  <MaterialCommunityIcons color={color} name="home-outline" size={size} />
);
const tabAddRecipeIcon = ({ color, size }) => (
  <MaterialCommunityIcons color={color} name="plus-box-outline" size={size} />
);

export default function HomeTabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: defaultStyles.headerStyle,
        headerShown: true,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tab.Screen
        component={MainScreen}
        name={routes.HOME_TAB}
        options={{
          title: "Home",
          tabBarIcon: tabHomeIcon,
          headerShown: false,
        }}
      />
      <Tab.Screen
        component={Test}
        name={routes.SEARCH}
        options={{
          title: "Search",
          tabBarIcon: tabSearchIcon,
          headerShown: false,
        }}
      />

      <Tab.Screen
        component={AddRecipeScreen}
        name={routes.RECIPE}
        options={{
          title: "Recipe",
          tabBarIcon: tabAddRecipeIcon,
          headerShown: false,
        }}
      />
      <Tab.Screen
        component={HistoryScreen}
        name={routes.HISTORY}
        options={{
          title: "Saved",
          tabBarIcon: tabHistoryIcon,
        }}
      />
      <Tab.Screen
        component={AccountScreen}
        name={routes.SETTINGS}
        options={{
          title: "Profile",
          tabBarIcon: tabProfileIcon,
        }}
      />
      {/* <Tab.Screen
        component={ChatScreen}
        name={routes.CHAT}
        options={{
          title: "Chat",
          tabBarIcon: tabSettingsIcon,
        }}
      /> */}
    </Tab.Navigator>
  );
}
