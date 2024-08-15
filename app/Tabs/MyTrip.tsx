import StartNewTripCard from "@/components/MyTrips/StartNewTripCard";
import { myTripStyles } from "@/Tabs/Tabs.style";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

function MyTrip() {
  const { t } = useTranslation();
  const [userTrips, setUserTrips] = useState<string[]>();

  const prefix = "tabs.myTrip";

  return (
    <View style={myTripStyles.view}>
      <View style={myTripStyles.container}>
        <Text style={myTripStyles.mainText}>{t(`${prefix}.title`)}</Text>
        <Ionicons name="add-circle-sharp" size={50} color="black" />
      </View>
      {userTrips?.length === 0 || <StartNewTripCard />}
    </View>
  );
}
export default MyTrip;
