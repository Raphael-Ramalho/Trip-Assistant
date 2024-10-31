import { CreateTripContext } from "@/context/CreateTripContext";
import OptionCard from "@/pages/MyTrips/SelectTraveler/OptionCard/OptionCard";
import Theme from "@/theme/Theme";
import { useNavigation } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

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
  const [selectedOption, setSelectedOption] = useState<{
    id: string;
    title: string;
    desc: string;
  }>();

  useEffect(() => {
    selectedOption && setTripData({
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
    </View>
  );
};
export default SelectBudget;
