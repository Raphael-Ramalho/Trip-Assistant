import Login from "@/pages/Login/Login";
import { View } from "react-native";
import "./i18n.config";
import { auth } from "@/configs/FirebaseConfig";
import { Redirect } from "expo-router";

export default function Index() {
  const user = auth.currentUser;
  return <View>{user ? <Redirect href={"/MyTrip"} /> : <Login />}</View>;
}
