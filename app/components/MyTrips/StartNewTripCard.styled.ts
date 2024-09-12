import { StyleSheet } from "react-native";

import Theme from "@/theme/Theme";

const { colors } = Theme;

export const cardStyles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
    display: "flex",
    alignItems: "center",
    gap: 25,
  },
  label: {
    fontSize: 25,
    fontFamily: "outfitMedium",
  },
  underLabel: {
    fontSize: 25,
    fontFamily: "outfit",
    textAlign: "center",
    color: colors.gray,
  },
  button: {
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 15,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: colors.white,
    fontFamily: "outfitMedium",
    fontSize: 17,
  },
});
