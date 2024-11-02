import Theme from "@/theme/Theme";
import { useNavigation } from "expo-router";
import { useContext, useEffect } from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CreateTripContext } from "@/context/CreateTripContext";

const { colors } = Theme;

const ReviewTrip = () => {
  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);

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
      <Text style={{ fontFamily: "outfitBold", fontSize: 35, marginTop: 20 }}>
        Review your trip
      </Text>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfitBold", fontSize: 20 }}>
          Before generating your trip, please review your selection
        </Text>

        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Ionicons name="location-sharp" size={34} color="black" />
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: colors.gray,
              }}
            >
              Destination
            </Text>
            <Text style={{ fontFamily: "outfitMedium", fontSize: 20 }}>
              {tripData?.locationInfo.name}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReviewTrip;
