import {
  buttonsStyle,
  createAccountStyle,
  formStyles,
} from "@/pages/SignUp/SignUp.styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const { text, container } = createAccountStyle;
const { inputContainer, input, inputTitle } = formStyles;
const { createAccountButton, createAccountText, signInButton, signInText } =
  buttonsStyle;

export default function SignUp() {
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
      
      <Text style={text}>Create New Account</Text>

      {/* User Full Name */}
      <View style={inputContainer}>
        <Text style={inputTitle}>Full Name</Text>
        <TextInput placeholder="Enter Full Name" style={input} />
      </View>

      {/* Email */}
      <View style={inputContainer}>
        <Text style={inputTitle}>Email</Text>
        <TextInput placeholder="Enter Email" style={input} />
      </View>

      {/* Password */}
      <View style={inputContainer}>
        <Text style={inputTitle}>Password</Text>
        <TextInput
          placeholder="Enter Password"
          secureTextEntry={true}
          style={input}
        />
      </View>

      {/* Sign In Button */}
      <TouchableOpacity style={signInButton}>
        <Text style={signInText}>Create Account</Text>
      </TouchableOpacity>

      {/* Create Account Button */}
      <TouchableOpacity
        style={createAccountButton}
        onPress={() => router.replace("pages/SignIn/SignIn")}
      >
        <Text style={createAccountText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
