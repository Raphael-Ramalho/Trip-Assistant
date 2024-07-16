import { Image, Text, View } from "react-native";

export default function Login() {
  return (
    <View>
      <Image
        source={require("@/assets/images/travel.jpg")}
        style={{ width: "100%", height: 500 }}
      />
      <View>
        <Text style={{
          fontSize:28,
          fontFamily:'outfitBold'
        }}>AI Travel Planner</Text>
      </View>
    </View>
  );
}
