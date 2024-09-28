import { StyleSheet, TextStyle } from "react-native";

import Theme from "@/theme/Theme";

const { colors } = Theme;

export const selectStyle = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 75,
    backgroundColor: colors.white,
    height: "100%",
  },
  text: {
    fontSize: 35,
    fontFamily: "outfitBold",
    marginTop: 20,
  },
  container2: {
    marginTop: 20,
  },
  text2: {
    fontSize: 23,
    fontFamily: "outfitBold",
  },
});
