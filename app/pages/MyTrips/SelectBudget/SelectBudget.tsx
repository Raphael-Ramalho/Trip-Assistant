import { CreateTripContext } from "@/context/CreateTripContext";
import OptionCard from "@/pages/MyTrips/SelectTraveler/OptionCard/OptionCard";
import Theme from "@/theme/Theme";
import { useNavigation, useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import {
  FlatList,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";

const { colors } = Theme;

const selectBudgetOptions = [
  {
    id: "1",
    title: "Cheap",
    desc: "Stay conscious of costs",
  },
  {
    id: "2",
    title: "Moderate",
    desc: "Keep cost on avarage",
  },
  {
    id: "3",
    title: "Luxury",
    desc: "Dont worry about cost",
  },
];

const SelectBudget = () => {
  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<{
    id: string;
    title: string;
    desc: string;
  }>();

  useEffect(() => {
    selectedOption &&
      setTripData({
        ...tripData,
        budget: selectedOption?.title,
      });
  }, [selectedOption]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  const onClickContinue = () => {
    if (!selectedOption) {
      ToastAndroid.show("Select Your Budget", ToastAndroid.LONG);
      return;
    }

    router.push("/pages/MyTrips/ReviewTrip/ReviewTrip");
  };
  return (
    <View
      style={{
        paddingTop: 75,
        padding: 25,
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
        Budget
      </Text>

      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontFamily: "outfitBold",
            fontSize: 20,
          }}
        >
          Choose spending habits for the trip
        </Text>

        <FlatList
          data={selectBudgetOptions}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{ marginVertical: 10 }}
              onPress={() => setSelectedOption(item)}
            >
              <OptionCard option={item} selectedOption={selectedOption} />
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity
        onPress={() => onClickContinue()}
        style={{
          padding: 20,
          backgroundColor: colors.primary,
          borderRadius: 15,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: colors.white,
            fontFamily: "outfitMedium",
            fontSize: 20,
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default SelectBudget;
