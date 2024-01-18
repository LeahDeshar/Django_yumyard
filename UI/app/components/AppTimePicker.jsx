import { useState } from "react";
import { Platform, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import AppTextInput from "./AppTextInput";
import AppText from "./AppText";
import colors from "../config/colors";

export default function AppTimePicker({
  placeholder,
  label,
  time,
  onTimeChange,
  icon,
  my0,
}) {
  const [show, setShow] = useState(false);

  return (
    <View>
      <AppTextInput
        onPress={() => {
          setShow(true);
        }}
        icon={icon}
        my0={my0}
        label={label}
      >
        {show || Platform.OS === "ios" ? (
          <DateTimePicker
            display={Platform.OS === "ios" ? "compact" : "default"}
            accentColor={colors.primary}
            testID="dateTimePicker"
            value={time ? new Date(time) : new Date()}
            style={{
              position: "absolute",
              transform: [{ scaleX: 3.4 }, { scaleY: 1 }],
            }}
            mode="time"
            onChange={(event, selectedDate) => {
              setShow(false);
              onTimeChange(selectedDate || new Date(time) || new Date());
            }}
          />
        ) : null}
        <View className="w-[92%] rounded-xl bg-white" pointerEvents="none">
          <AppText className="p-3 px-4">
            {time
              ? new Date(time).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })
              : placeholder}
          </AppText>
        </View>
      </AppTextInput>
    </View>
  );
}
