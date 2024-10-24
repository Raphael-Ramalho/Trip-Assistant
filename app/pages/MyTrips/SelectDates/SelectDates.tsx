import { CreateTripContext } from "@/context/CreateTripContext";
import Theme from "@/theme/Theme";
import { Link, useNavigation, useRouter } from "expo-router";
import moment, { Moment } from "moment";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import CalendarPicker, { ChangedDate } from "react-native-calendar-picker";

const { colors } = Theme;

const SelectDates = () => {
  const navigation = useNavigation();
  const [startDate, setStartDate] = useState<Moment>();
  const [endDate, setEndDate] = useState<Moment>();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShow: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  const onDateChange = (date: Date, type: ChangedDate) => {
    console.log(date, type);

    if (type === "START_DATE") {
      setStartDate(moment(date));
    } else {
      setEndDate(moment(date));
    }
  };

  const onDateSelectionContinue = () => {
    if (!startDate && !endDate) {
      ToastAndroid.show("Please select Start and End Date", ToastAndroid.LONG);
      return;
    }
    const totalNoOfDays = endDate?.diff(startDate, "days") || 0;
    setTripData({
      ...tripData,
      startDate,
      endDate,
      totalNoOfDays: totalNoOfDays + 1,
    });
    router.push("/pages/MyTrips/SelectBudget/SelectBudget");
  };

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
          onDateChange={onDateChange}
          allowRangeSelection
          minDate={new Date()}
          maxRangeDuration={5}
          selectedRangeStyle={{
            backgroundColor: colors.primary,
          }}
          selectedDayTextStyle={{
            color: colors.white,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={onDateSelectionContinue}
        style={{
          padding: 15,
          backgroundColor: colors.primary,
          borderRadius: 15,
          marginTop: 35,
        }}
      >
        {/* <Link href=""> */}
        <Text
          style={{
            fontFamily: "outfitBold",
            color: colors.white,
            textAlign: "center",
          }}
        >
          Continue
        </Text>
        {/* </Link> */}
      </TouchableOpacity>
    </View>
  );
};

export default SelectDates;
