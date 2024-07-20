import { loginStyles } from "@/pages/Login/Login.styles";
import { Image, Text, View } from "react-native";

export default function Login() {
  return (
    <View>
      <Image
        source={require("@/assets/images/travel.jpg")}
        style={loginStyles.img}
      />

      <View style={loginStyles.container}>
        <Text style={loginStyles.title}>AI Travel Planner</Text>

        <Text style={loginStyles.subTitle}>
          Discover your next adventure. Personalized itineraries at your
          fingertips. Travel smarter with AI-driven insights
        </Text>

        <View style={loginStyles.button}>
          <Text style={loginStyles.buttonText}>Sign In With Google</Text>
        </View>
      </View>
    </View>
  );
}
