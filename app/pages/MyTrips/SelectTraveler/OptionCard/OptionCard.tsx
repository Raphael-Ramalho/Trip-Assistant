import { TravelersListType } from "@/pages/MyTrips/SelectTraveler/selectTraveler.types";
import { Text, View } from "react-native";
import Theme from "@/theme/Theme";

const { colors } = Theme;

const OptionCard = ({
  option,
  selectedOption,
}: {
  option: TravelersListType;
  selectedOption?: TravelersListType;
}) => {
  return (
    <View
      style={[
        {
          padding: 25,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: colors.lightGray,
          borderRadius: 15,
        },
        selectedOption === option?.id && { borderWidth: 3 },
      ]}
    >
      <View>
        <Text style={{ fontSize: 20, fontFamily: "outfitBold" }}>
          {option?.title}
        </Text>
        <Text
          style={{ fontSize: 17, fontFamily: "outfit", color: colors.gray }}
        >
          {option?.desc}
        </Text>
        <Text style={{ fontSize: 35 }}>{option.icon}</Text>
      </View>
    </View>
  );
};

export default OptionCard;
