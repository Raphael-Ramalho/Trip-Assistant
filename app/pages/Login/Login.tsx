import { loginStyles } from "@/pages/Login/Login.styles";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Login() {

  const router = useRouter()
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

        <TouchableOpacity style={loginStyles.button} onPress={()=>router.push('pages/SignIn/SignIn')}>
          <Text style={loginStyles.buttonText}>Sign In With Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
