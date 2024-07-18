import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StyleSheet, Text } from "react-native";

const style = StyleSheet.create({
  loadingText: {
    height: "100%",
    textAlignVertical: "center",
    textAlign: "center",
    width: "100%",
  },
});

export default function RootLayout() {
  let [fontsLoaded] = useFonts({
    outfit: require("@/assets/fonts/Outfit-Regular.ttf"),
    outfitMedium: require("@/assets/fonts/Outfit-Medium.ttf"),
    outfitBold: require("@/assets/fonts/Outfit-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text style={style.loadingText}>Loading...</Text>;
  }

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}


