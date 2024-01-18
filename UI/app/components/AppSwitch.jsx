import { Switch, TouchableWithoutFeedback, View, Platform } from "react-native";
import AppText from "./AppText";

export default function AppSwitch({
  my0,
  label,
  value,
  onValueChange,
  ...otherProps
}) {
  return Platform.OS === "android" ? (
    <TouchableWithoutFeedback onPress={() => onValueChange(!value)}>
      <View className="flex-row px-5">
        <View
          aria-hidden
          accessibilityElementsHidden
          className={`flex-1 ${my0 ? "my-0" : "my-0"}`}
        >
          <AppText
            accessibilityElementsHidden
            aria-hidden
            className="text-base flex-1 py-3"
          >
            {label}
          </AppText>
        </View>
        <Switch
          accessibilityLabel={label}
          className="ml-2 "
          onValueChange={() => onValueChange(!value)}
          value={value}
          {...otherProps}
        />
      </View>
    </TouchableWithoutFeedback>
  ) : (
    <TouchableWithoutFeedback
      accessibilityLabel={label}
      accessibilityRole="switch"
      accessibilityState={{ checked: value }}
      onPress={() => onValueChange(!value)}
    >
      <View
        className={`flex-row justify-between items-center ${
          my0 ? "my-0" : "my-0"
        } px-5`}
      >
        <AppText className="text-base flex-1 py-3">{label}</AppText>
        <Switch
          aria-hidden
          accessibilityElementsHidden
          className="ml-2"
          onValueChange={() => onValueChange(!value)}
          value={value}
          {...otherProps}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
