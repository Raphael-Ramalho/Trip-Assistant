import Theme from "@/theme/Theme";
import { Text, View } from "react-native";

const { colors } = Theme;

const GenerateTrip = () => {
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
    </View>
  );
};

export default GenerateTrip;
