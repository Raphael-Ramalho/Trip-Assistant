import { signInStyles } from "@/pages/SignIn/SignIn.styles";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, TextInput, View } from "react-native";

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

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <View style={container}>
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
      <View style={signInButton}>
        <Text style={signInText}>Sign In</Text>
      </View>

      {/* Create Account Button */}
      <View style={createAccountButton}>
        <Text style={createAccountText}>Create Account</Text>
      </View>
    </View>
  );
}
