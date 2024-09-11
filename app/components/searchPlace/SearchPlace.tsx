import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { searchStyle } from "./SearchPlace.styled";
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
          // 'details' is provided when fetchDetails = true
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
