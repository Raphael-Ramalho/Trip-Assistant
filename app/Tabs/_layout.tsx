import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="MyTrip" />
      <Tabs.Screen name="Discover" />
      <Tabs.Screen name="Profile" />
    </Tabs>
  );
}
