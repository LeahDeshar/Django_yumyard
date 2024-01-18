import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useState } from "react";
import { Alert, TouchableHighlight, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import AsyncStorage from "@react-native-async-storage/async-storage";

import Screen from "../components/Screen";
import routes from "../navigation/routes";
import { AppNavigatorParamList } from "../navigation/AppNavigator";
import AppListItems from "../components/AppListItems";
import { ListTitle } from "../components/ListTitle";
import AppText from "../components/AppText";
import colors from "../config/colors";

export const initialData = [
  {
    id: "clq5gofvj00003j6pxqv8kh37",
    number: 1,
    scannedAt: null,
    name: "Joon Shakya",
    email: "joonshakya07@gmail.com",
  },
  {
    id: "clq5gs80h00013j6pd8i90oiz",
    number: 2,
    scannedAt: null,
    name: "Purna Shrestha",
    email: "purnashrestha07@gmail.com",
  },
  {
    id: "clq5gu66w00023j6pj0zgv4ht",
    number: 3,
    scannedAt: null,
    name: "Shreeya Nepal",
    email: "shreeyanepal07@gmail.com",
  },
  {
    id: "clq5gofvj00004j6pxqv8kh38",
    number: 4,
    scannedAt: null,
    name: "John Doe",
    email: "johndoe07@gmail.com",
  },
  {
    id: "clq5gs80h00014j6pd8i90oja",
    number: 5,
    scannedAt: null,
    name: "Jane Smith",
    email: "janesmith07@gmail.com",
  },
  {
    id: "clq5gu66w00024j6pj0zgv4hu",
    number: 6,
    scannedAt: null,
    name: "Bob Johnson",
    email: "bobjohnson07@gmail.com",
  },
  {
    id: "clq5gu66w00025j6pj0zgv4hv",
    number: 7,
    scannedAt: null,
    name: "Alice Williams",
    email: "alicewilliams07@gmail.com",
  },
  {
    id: "clq5gu66w00026j6pj0zgv4hw",
    number: 8,
    scannedAt: null,
    name: "Charlie Brown",
    email: "charliebrown07@gmail.com",
  },
  {
    id: "clq5gu66w00027j6pj0zgv4hx",
    number: 9,
    scannedAt: null,
    name: "Emily Davis",
    email: "emilydavis07@gmail.com",
  },
];

export default function SettingsScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<AppNavigatorParamList, routes.SETTINGS>;
}) {
  const [datas, setDatas] = useState<
    {
      id: string;
      number: number;
      scannedAt: string | null;
      name: string;
    }[]
  >([]);

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  async function getData() {
    try {
      const value = await AsyncStorage.getItem("datas");
      if (value !== null) {
        setDatas(JSON.parse(value));
      } else {
        await AsyncStorage.setItem("datas", JSON.stringify(initialData));
        setDatas(initialData);
      }
    } catch (e) {
      // error reading value
    }
  }

  return (
    <Screen noSafeArea className="px-5">
      <AppListItems
        items={[
          {
            name: "About",
            options: [
              {
                dropdown: false,
                title: "Version",
                subTitle: "1.0.1",
              },
            ],
          },
        ]}
      />
    </Screen>
  );
}
