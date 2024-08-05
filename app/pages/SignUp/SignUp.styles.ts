import { StyleSheet } from "react-native";

import Theme from "@/theme/Theme";

const { colors } = Theme;

export const createAccountStyle = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 40,
    backgroundColor: colors.white,
    height: "100%",
  },
  text: {
    fontFamily: "outfitBold",
    fontSize: 30,
    marginTop: 30,
  },
});

export const formStyles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
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
});

export const buttonsStyle = StyleSheet.create({
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
    borderWidth: 1,
  },
  createAccountText: {
    color: colors.primary,
    textAlign: "center",
  },
});
