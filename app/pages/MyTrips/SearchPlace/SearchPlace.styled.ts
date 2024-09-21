import { StyleSheet, TextStyle } from "react-native";

import Theme from "@/theme/Theme";

const { colors } = Theme;

export const searchStyle = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 75,
    backgroundColor: colors.white,
    height: "100%",
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 25,
  },
});
