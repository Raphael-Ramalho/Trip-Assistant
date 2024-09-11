import { Text, TouchableOpacity, View } from "react-native";
import { cardStyles } from "./StartNewTripCard.styled";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTranslation } from "react-i18next";

function StartNewTripCard() {
  const { t } = useTranslation();

  const cardPrefix = "components.card";

  return (
    <View style={cardStyles.container}>
      <Ionicons name="location-sharp" size={30} color="black" />
      <Text style={cardStyles.label}>{t(`${cardPrefix}.no-trips`)}</Text>

      <Text style={cardStyles.underLabel}>
        {t(`${cardPrefix}.no-trips-under-label"`)}
      </Text>

      <TouchableOpacity style={cardStyles.button}>
        <Text style={cardStyles.buttonText}>{t(`${cardPrefix}.button`)}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default StartNewTripCard;