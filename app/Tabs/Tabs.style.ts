import { StyleSheet, TextStyle } from "react-native";

import Theme from "@/theme/Theme";

const { colors } = Theme;

export const myTripStyles = StyleSheet.create({
  view: {
    padding: 25,
    paddingTop: 55,
    backgroundColor: colors.white,
    height: "100%",
  },
  mainText: {
    fontFamily: "outfitBold",
    fontSize: 35,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
});
