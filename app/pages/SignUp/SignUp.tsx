import {
  buttonsStyle,
  createAccountStyle,
  formStyles,
} from "@/pages/SignUp/SignUp.styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { useTranslation } from "react-i18next";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/configs/FirebaseConfig";

const { text, container } = createAccountStyle;
const { inputContainer, input, inputTitle } = formStyles;
const { createAccountButton, createAccountText, signInButton, signInText } =
  buttonsStyle;

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const { t } = useTranslation();

  const signUpPrefix = "pages.signUp";
  const inputPrefix = `${signUpPrefix}.inputs`;
  const buttonPrefix = `${signUpPrefix}.buttons`;

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const onCreateAccount = () => {
    if (!fullName && !password && !email) {
      ToastAndroid.show(
        t(`${signUpPrefix}.toast.missingInfo`),
        ToastAndroid.SHORT
      );
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log({ user });
        router.replace("/MyTrip");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorMessage, errorCode });
      });
  };

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
          onChangeText={setFullName}
        />
      </View>

      {/* Email */}
      <View style={inputContainer}>
        <Text style={inputTitle}>{t(`${inputPrefix}.email.text`)}</Text>
        <TextInput
          placeholder={t(`${inputPrefix}.email.placeholder`)}
          style={input}
          onChangeText={setEmail}
        />
      </View>

      {/* Password */}
      <View style={inputContainer}>
        <Text style={inputTitle}>{t(`${inputPrefix}.password.text`)}</Text>
        <TextInput
          placeholder={t(`${inputPrefix}.password.placeholder`)}
          secureTextEntry={true}
          style={input}
          onChangeText={setPassword}
        />
      </View>

      {/* Create Account Button */}
      <TouchableOpacity style={signInButton}>
        <Text onPress={onCreateAccount} style={signInText}>
          {t(`${buttonPrefix}.createAccount`)}
        </Text>
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
