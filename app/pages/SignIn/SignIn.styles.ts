import { StyleSheet } from "react-native";

import Theme from "@/theme/Theme";

const { colors } = Theme;



const formStyles = StyleSheet.create({
  emailContainer: {
    marginTop: 50,
  },
  input: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: colors.gray,
    fontFamily: "outfit",
  },
  inputTitle: {
    fontFamily: "outfit",
  },
})

const buttonsStyle = StyleSheet.create({
  /* Sign in button */
  signInButton: {
    padding: 20,
    backgroundColor: colors.primary,
    borderRadius: 15,
    marginTop: 50,
  },
  signInText: {
    color: colors.white,
    textAlign: "center",
  },
  /* Create account button */
  createAccountButton: {
    padding: 18,
    backgroundColor: colors.white,
    borderRadius: 15,
    marginTop: 20,
    borderWidth: 1
  },
  createAccountText: {
    color: colors.primary,
    textAlign: "center",
  },
})

export const signInStyles = StyleSheet.create({
  ...formStyles,
  ...buttonsStyle,
  container: {
    backgroundColor: colors.white,
    height: "100%",
    padding: 25,
    paddingTop: 80,
  },
  mainText: {
    fontFamily: "outfitBold",
    fontSize: 30,
  },
  secondaryText: {
    fontFamily: "outfit",
    fontSize: 30,
    color: colors.gray,
    marginTop: 20,
  },
  terciaryText: {
    fontFamily: "outfit",
    fontSize: 26,
    color: colors.gray,
    marginTop: 10,
  },
});
