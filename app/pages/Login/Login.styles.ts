import { StyleSheet, TextStyle } from "react-native";

import Theme from "@/theme/Theme";

const { colors } = Theme;

const text: TextStyle = {
  fontFamily: "outfitBold",
  textAlign: "center",
};

export const loginStyles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 99,
    padding: 16,
    marginHorizontal: 26,
    marginTop: "20%",
  },
  buttonText: {
    color: colors.white,
    fontFamily: "outfit",
    fontSize: 16,
    textAlign: "center",
  },
  container: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "100%",
    marginTop: -20,
    padding: 25,
  },
  img: {
    width: "100%",
    height: 550,
  },
  title: {
    ...text,
    fontSize: 30,
    marginTop: 10,
  },
  subTitle: {
    ...text,
    fontSize: 16,
    color: colors.gray,
  },
});
