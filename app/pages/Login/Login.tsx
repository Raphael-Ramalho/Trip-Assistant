import { loginStyles } from "@/pages/Login/Login.styles";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Login() {
  const router = useRouter();
  const { t } = useTranslation();

  const loginPrefix = "pages.login";

  return (
    <View>
      <Image
        source={require("@/assets/images/travel.jpg")}
        style={loginStyles.img}
      />

      <View style={loginStyles.container}>
        <Text style={loginStyles.title}>{t(`${loginPrefix}.title`)}</Text>

        <Text style={loginStyles.subTitle}>{t(`${loginPrefix}.subtitle`)}</Text>

        <TouchableOpacity
          style={loginStyles.button}
          onPress={() => router.push("pages/SignIn/SignIn")}
        >
          <Text style={loginStyles.buttonText}>
            {t(`${loginPrefix}.signInButton`)}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
