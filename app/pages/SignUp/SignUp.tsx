import {
  buttonsStyle,
  createAccountStyle,
  formStyles,
} from "@/pages/SignUp/SignUp.styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useTranslation } from 'react-i18next'

const { text, container } = createAccountStyle;
const { inputContainer, input, inputTitle } = formStyles;
const { createAccountButton, createAccountText, signInButton, signInText } =
  buttonsStyle;

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();
  const { t } = useTranslation();

  const signUpPrefix = "pages.signUp";
  const inputPrefix = `${signUpPrefix}.inputs`;
  const buttonPrefix = `${signUpPrefix}.buttons`;

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <View style={container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={text}>{t(`${signUpPrefix}.title`)}</Text>

      {/* User Full Name */}
      <View style={inputContainer}>
        <Text style={inputTitle}>{t(`${inputPrefix}.fullName.text`)}</Text>
        <TextInput
          placeholder={t(`${inputPrefix}.fullName.placeholder`)}
          style={input}
        />
      </View>

      {/* Email */}
      <View style={inputContainer}>
        <Text style={inputTitle}>{t(`${inputPrefix}.email.text`)}</Text>
        <TextInput
          placeholder={t(`${inputPrefix}.email.placeholder`)}
          style={input}
        />
      </View>

      {/* Password */}
      <View style={inputContainer}>
        <Text style={inputTitle}>{t(`${inputPrefix}.password.text`)}</Text>
        <TextInput
          placeholder={t(`${inputPrefix}.password.placeholder`)}
          secureTextEntry={true}
          style={input}
        />
      </View>

      {/* Create Account Button */}
      <TouchableOpacity style={signInButton}>
        <Text style={signInText}>{t(`${buttonPrefix}.createAccount`)}</Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity
        style={createAccountButton}
        onPress={() => router.replace("pages/SignIn/SignIn")}
      >
        <Text style={createAccountText}>{t(`${buttonPrefix}.signIn`)}</Text>
      </TouchableOpacity>
    </View>
  );
}
