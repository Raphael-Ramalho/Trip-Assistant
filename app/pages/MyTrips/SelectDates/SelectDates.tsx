import Theme from "@/theme/Theme";
import { useNavigation } from "expo-router";
import React from "react";
import { useEffect } from "react";
import { Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

const { colors } = Theme;

const SelectDates = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShow: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: colors.white,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfitBold",
          fontSize: 35,
          marginTop: 20,
        }}
      >
        Travel Dates
      </Text>
      <View
        style={{
          marginTop: 30,
        }}
      >
        <CalendarPicker
          allowRangeSelection
          minDate={new Date()}
          maxRangeDuration={5}
          selectedRangeStyle={{
            backgroundColor: colors.primary,
          }}
          selectedDayTextStyle={{
            color: colors.white
          }}
        />
      </View>
    </View>
  );
};

export default SelectDates;
