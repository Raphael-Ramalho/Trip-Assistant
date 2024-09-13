import { searchStyle } from "@/pages/MyTrips/SearchPlace/SearchPlace.styled";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const SearchPlace = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Search",
    });
  }, []);

  return (
    <View style={searchStyle.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        query={{
          key: process.env.REACT_APP_GOOGLE_PLACES_KEY,
          language: "en",
        }}
      />
    </View>
  );
};

export default SearchPlace;
