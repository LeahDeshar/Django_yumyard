import {
  Button,
  Modal,
  RefreshControl,
  TouchableHighlight,
  View,
} from "react-native";
import AppTextInput from "./AppTextInput";
import colors from "../config/colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useEffect, useMemo } from "react";
import { Place, places } from "../utils/constants";
import NoPlacesFound from "./NoPlacesFound";
import { ListItemSeparator } from "./lists";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";

export default function LocationPickerModal({
  modalVisible,
  setModalVisible,
  textInput,
  setTextInput,
  location,
  setLocation,
}) {
  const filteredPlaces = useMemo(() => {
    return places.filter((place) => {
      return (
        place.title.toLowerCase().includes(textInput.toLowerCase()) ||
        place.city.toLowerCase().includes(textInput.toLowerCase())
      );
    });
  }, [textInput]);

  useEffect(() => {
    if (modalVisible) {
      if (location) {
        setTextInput(location.title);
      } else {
        setTextInput("");
      }
    }
  }, [modalVisible]);

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View className="flex-1 pt-10">
        <View className="flex-row items-center pl-5 pr-2">
          <AppTextInput
            clearButtonMode="always"
            autoFocus
            label=""
            value={textInput}
            onChangeText={(text) => {
              setTextInput(text);
            }}
            className="flex-1 mr-2"
            placeholder="Pickup Location"
            icon="my-location"
            materialIcons
          />
          <Button
            color={colors.primary}
            title="Cancel"
            onPress={() => {
              setModalVisible(false);
            }}
          />
        </View>
        <KeyboardAwareScrollView
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={() => {}} />
          }
          contentContainerStyle={{
            paddingBottom: 40,
          }}
          enableResetScrollToCoords={false}
          keyboardShouldPersistTaps="handled"
          keyboardOpeningTime={0}
        >
          {filteredPlaces.length === 0 ? (
            <NoPlacesFound />
          ) : (
            <>
              {filteredPlaces.map((place, index) => (
                <View key={place.id}>
                  {index !== 0 && <ListItemSeparator />}
                  <TouchableHighlight
                    onPress={() => {
                      setLocation(place);
                      setModalVisible(false);
                    }}
                    underlayColor={colors.highlight}
                  >
                    <View className="px-5 py-3 flex-row items-center">
                      <MaterialCommunityIcons
                        // color={colors.primary}
                        name={"map-marker"}
                        size={32}
                      />
                      <View>
                        <AppText className="ml-2 text-base">
                          {place.title}
                        </AppText>
                        <AppText className="ml-2 text-mediumGray">
                          {place.city}
                        </AppText>
                      </View>
                    </View>
                  </TouchableHighlight>
                </View>
              ))}
            </>
          )}
        </KeyboardAwareScrollView>
      </View>
    </Modal>
  );
}
