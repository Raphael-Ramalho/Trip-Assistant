import { CreateTripContext } from "@/context/CreateTripContext";
import OptionCard from "@/pages/MyTrips/SelectTraveler/OptionCard/OptionCard";
import { SelectTravelersList } from "@/pages/MyTrips/SelectTraveler/selectTraveler.constants";
import { selectStyle } from "@/pages/MyTrips/SelectTraveler/SelectTraveler.styled";
import { TravelersListType } from "@/pages/MyTrips/SelectTraveler/selectTraveler.types";
import Theme from "@/theme/Theme";
import { Link, useNavigation } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const { colors } = Theme;

const SelectTraveler = () => {
  const navigation = useNavigation();
  const [selectedTraveler, setSelectedTraveler] = useState<TravelersListType>();
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShow: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  useEffect(() => {
    setTripData({ ...tripData, traveler: selectedTraveler });
  }, [selectedTraveler]);

  useEffect(() => {
    console.log(tripData);
  }, [tripData]);

  return (
    <View style={selectStyle.container}>
      <Text style={selectStyle.text}>Who's traveling</Text>

      <View style={selectStyle.container2}>
        <Text style={selectStyle.text2}>Choose your traveles</Text>
      </View>

      <FlatList
        data={SelectTravelersList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ marginVertical: 10 }}
            onPress={() => setSelectedTraveler(item)}
            key={item.title}
          >
            <OptionCard option={item} selectedOption={selectedTraveler} />
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: colors.primary,
          borderRadius: 15,
          marginTop: 20,
        }}
      >
        <Link
          href={"/pages/MyTrips/SelectDates/SelectDates"}
          style={{ width: "100%", textAlign: "center" }}
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
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default SelectTraveler;
