import { signInStyles } from "@/pages/SignIn/SignIn.styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const {
  container,
  createAccountButton,
  createAccountText,
  emailContainer,
  input,
  inputTitle,
  mainText,
  secondaryText,
  signInButton,
  signInText,
  terciaryText,
} = signInStyles;

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <View style={container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={mainText}>Let's Sign You In</Text>
      <Text style={secondaryText}>Welcome Back</Text>
      <Text style={terciaryText}>You've been missed!</Text>

      {/* Email */}
      <View style={emailContainer}>
        <Text style={inputTitle}>Email</Text>
        <TextInput placeholder="Enter Email" style={input} />
      </View>

      {/* Password */}
      <View style={emailContainer}>
        <Text style={inputTitle}>Password</Text>
        <TextInput
          placeholder="Enter Password"
          secureTextEntry={true}
          style={input}
        />
      </View>

      {/* Sign In Button */}
      <TouchableOpacity style={signInButton}>
        <Text style={signInText}>Sign In</Text>
      </TouchableOpacity>

      {/* Create Account Button */}
      <TouchableOpacity
        style={createAccountButton}
        onPress={() => router.replace("pages/SignUp/SignUp")}
      >
        <Text style={createAccountText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}
