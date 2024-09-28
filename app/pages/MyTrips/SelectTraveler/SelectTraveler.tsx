import OptionCard from "@/pages/MyTrips/SelectTraveler/OptionCard/OptionCard";
import { SelectTravelersList } from "@/pages/MyTrips/SelectTraveler/selectTraveler.constants";
import { selectStyle } from "@/pages/MyTrips/SelectTraveler/SelectTraveler.styled";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const SelectTraveler = () => {
  const navigation = useNavigation();
  const [selectedTraveler, setSelectedTraveler] = useState<string>();

  useEffect(() => {
    navigation.setOptions({
      headerShow: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

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
            onPress={() => setSelectedTraveler(item.title)}
            key={item.title}
          >
            <OptionCard option={item} selectedTraveler={selectedTraveler}/>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SelectTraveler;
