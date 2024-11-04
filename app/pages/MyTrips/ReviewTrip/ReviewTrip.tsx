import Theme from "@/theme/Theme";
import { useNavigation } from "expo-router";
import { useContext, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CreateTripContext } from "@/context/CreateTripContext";
import moment from "moment";

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

        {/* Destination Info */}
        <View
          style={{
            marginTop: 40,
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

        {/* Date Selected Info */}
        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Ionicons name="calendar-number" size={34} color="black" />
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: colors.gray,
              }}
            >
              Travel Date
            </Text>
            <Text style={{ fontFamily: "outfitMedium", fontSize: 20 }}>
              {moment(tripData?.startDate).format("DD MMM") +
                " to " +
                moment(tripData.endDate).format("DD MMM") +
                "  "}
              ({tripData?.totalNoOfDays} days)
            </Text>
          </View>
        </View>

        {/* Traveler Info */}
        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Ionicons name="bus" size={34} color="black" />
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: colors.gray,
              }}
            >
              Who is Traveling
            </Text>
            <Text style={{ fontFamily: "outfitMedium", fontSize: 20 }}>
              {tripData?.traveler?.title}
            </Text>
          </View>
        </View>

        {/* Budget Info */}
        <View
          style={{
            marginTop: 25,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Ionicons name="card" size={34} color="black" />
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: colors.gray,
              }}
            >
              Budget
            </Text>
            <Text style={{ fontFamily: "outfitMedium", fontSize: 20 }}>
              {tripData?.budget}
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        // onPress={() => onClickContinue()}
        style={{
          padding: 20,
          backgroundColor: colors.primary,
          borderRadius: 15,
          marginTop: 80,
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
          Build My Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReviewTrip;
