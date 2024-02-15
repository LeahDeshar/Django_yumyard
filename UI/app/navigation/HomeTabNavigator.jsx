import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import routes from "./routes";
import defaultStyles from "../config/styles";
// import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import HistoryScreen from "../screens/HistoryScreen";
import colors from "../config/colors";
import OffersScreen from "../screens/OffersScreen";
import ChatScreen from "../screens/ChatScreen";
import MainScreen from "../screens/MainScreen";
import AccountScreen from "../screens/AccountScreen";

const tabToolsIcon = ({ color, size }) => (
  <MaterialCommunityIcons color={color} name="car" size={size} />
);

const tabSettingsIcon = ({ color, size }) => (
  <Ionicons name="md-settings-sharp" size={size} color={color} />
);

const tabHistoryIcon = ({ color, size }) => (
  <MaterialCommunityIcons color={color} name="history" size={size} />
);

const tabOfferIcon = ({ color, size }) => (
  <MaterialCommunityIcons color={color} name="shopping" size={size} />
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
          title: "YumYard",
          tabBarIcon: tabHistoryIcon,
          headerShown: false,
        }}
      />
      <Tab.Screen
        component={HistoryScreen}
        name={routes.HISTORY}
        options={{
          title: "History",
          tabBarIcon: tabHistoryIcon,
        }}
      />
      <Tab.Screen
        component={OffersScreen}
        name={routes.OFFERS}
        options={{
          title: "Promos",
          headerTitle: "Offers and Promos",
          tabBarIcon: tabOfferIcon,
        }}
      />
      <Tab.Screen
        component={AccountScreen}
        name={routes.SETTINGS}
        options={{
          title: "Settings",
          tabBarIcon: tabSettingsIcon,
        }}
      />
      <Tab.Screen
        component={ChatScreen}
        name={routes.CHAT}
        options={{
          title: "Chat",
          tabBarIcon: tabSettingsIcon,
        }}
      />
    </Tab.Navigator>
  );
}
