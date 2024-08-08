import { signInStyles } from "@/pages/SignIn/SignIn.styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  const signInPrefix = "pages.signIn";
  const inputPrefix = `${signInPrefix}.inputs`;
  const buttonPrefix = `${signInPrefix}.buttons`;

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <View style={container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={mainText}>{t(`${signInPrefix}.mainText`)}</Text>
      <Text style={secondaryText}>{t(`${signInPrefix}.secondaryText`)}</Text>
      <Text style={terciaryText}>{t(`${signInPrefix}.terciaryText`)}</Text>

      {/* Email */}
      <View style={emailContainer}>
        <Text style={inputTitle}>{t(`${inputPrefix}.email.text`)}</Text>
        <TextInput
          placeholder={t(`${inputPrefix}.email.placeholder`)}
          style={input}
        />
      </View>

      {/* Password */}
      <View style={emailContainer}>
        <Text style={inputTitle}>{t(`${inputPrefix}.password.text`)}</Text>
        <TextInput
          placeholder={t(`${inputPrefix}.password.placeholder`)}
          secureTextEntry={true}
          style={input}
        />
      </View>

      {/* Sign In Button */}
      <TouchableOpacity style={signInButton}>
        <Text style={signInText}>{t(`${buttonPrefix}.signIn`)}</Text>
      </TouchableOpacity>

      {/* Create Account Button */}
      <TouchableOpacity
        style={createAccountButton}
        onPress={() => router.replace("pages/SignUp/SignUp")}
      >
        <Text style={createAccountText}>
          {t(`${buttonPrefix}.createAccount`)}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
