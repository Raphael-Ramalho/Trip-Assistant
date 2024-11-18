import { CreateTripContext } from "@/context/CreateTripContext";
import Theme from "@/theme/Theme";
import { useContext } from "react";
import { Image, Text, View } from "react-native";

const { colors } = Theme;

const GenerateTrip = () => {
  const { tripData, setTripData } = useContext(CreateTripContext);

  const generateAiTrip = () => {
    
  }
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: colors.white,
        height: "100%",
      }}
    >
      <Text
        style={{ fontFamily: "outfitBold", fontSize: 35, textAlign: "center" }}
      >
        Please Wait...
      </Text>
      <Text
        style={{
          fontFamily: "outfitMedium",
          fontSize: 20,
          textAlign: "center",
          marginTop: 40,
        }}
      >
        We are working to generate your dream trip
      </Text>

      <Image
        source={require("@/assets/images/plane.jpg")}
        style={{ width: "100%", height: 200, objectFit: "contain" }}
      />

      <Text
        style={{
          fontFamily: "outfit",
          color: colors.gray,
          fontSize: 20,
          textAlign: "center",
        }}
      >
        Do not Go Back
      </Text>
    </View>
  );
};

export default GenerateTrip;
