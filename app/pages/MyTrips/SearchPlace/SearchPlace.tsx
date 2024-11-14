import { CreateTripContext } from "@/context/CreateTripContext";
import { searchStyle } from "@/pages/MyTrips/SearchPlace/SearchPlace.styled";
import { useNavigation, useRouter } from "expo-router";
import { useContext, useEffect } from "react";
import { View } from "react-native";
import {
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";

type CompleteGoogleDetails = GooglePlaceDetail & {
  photos: {
    height: number;
    html_attributions: string[];
    photo_reference?: string;
    width: number;
  }[];
};

const SearchPlace = () => {
  const { setTripData } = useContext(CreateTripContext);
  const navigation = useNavigation();
  const router = useRouter();

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
        placeholder="Search Place"
        fetchDetails={true}
        onPress={(data, details = null) => {
          const fixedDetails = details as CompleteGoogleDetails;
          setTripData({
            locationInfo: {
              name: data.description,
              coordinates: fixedDetails?.geometry.location,
              photoRef: fixedDetails?.photos[0]?.photo_reference,
              url: fixedDetails?.url,
            },
          });
          router.push("/pages/MyTrips/SelectTraveler/SelectTraveler");
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_PLACES_KEY,
          language: "en",
        }}
        styles={{
          textInputContainer: searchStyle.inputContainer,
        }}
      />
    </View>
  );
};

export default SearchPlace;
