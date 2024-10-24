import OptionCard from "@/pages/MyTrips/SelectTraveler/OptionCard/OptionCard";
import Theme from "@/theme/Theme";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

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
  const [selectedOption, setSelectedOption] = useState();

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
        height: '100%'
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
            <View>
              <OptionCard option={item} selectedOption={selectedOption} />
            </View>
          )}
        />
      </View>
    </View>
  );
};
export default SelectBudget;
