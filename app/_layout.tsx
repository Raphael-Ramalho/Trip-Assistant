import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StyleSheet, Text } from "react-native";
import {
  ContextDataType,
  CreateTripContext,
} from "./context/CreateTripContext";
import { useState } from "react";

const style = StyleSheet.create({
  loadingText: {
    height: "100%",
    textAlignVertical: "center",
    textAlign: "center",
    width: "100%",
  },
});

export default function RootLayout() {
  const [tripData, setTripData] = useState<ContextDataType>({
    locationInfo: {},
  });
  let [fontsLoaded, error] = useFonts({
    outfit: require("@/assets/fonts/Outfit-Regular.ttf"),
    outfitMedium: require("@/assets/fonts/Outfit-Medium.ttf"),
    outfitBold: require("@/assets/fonts/Outfit-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return <Text style={style.loadingText}>Loading...</Text>;
  }

  return (
    <CreateTripContext.Provider value={{ tripData, setTripData }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </CreateTripContext.Provider>
  );
}
