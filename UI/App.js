import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useEffect, useRef, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import * as SplashScreen from "expo-splash-screen";
import * as Notifications from "expo-notifications";
import AppProgress from "./app/components/AppProgress";
import { Provider } from "react-redux";
import { store } from "./app/store/store";
export default function App() {
  const [loadingVisible, setLoadingVisible] = useState(false);
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  SplashScreen.preventAutoHideAsync();
  return (
    <>
      <AppProgress
        visible={loadingVisible}
        onDone={() => {
          setLoadingVisible(false);
        }}
        progress={1}
      />
      <Provider store={store}>
        <NavigationContainer>
          <GestureHandlerRootView
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <BottomSheetModalProvider>
              {/* <AppNavigator /> */}
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
