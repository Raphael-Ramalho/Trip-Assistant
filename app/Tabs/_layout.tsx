import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import Theme from "@/theme/Theme";
import { useTranslation } from "react-i18next";

const { colors } = Theme;

export default function TabLayout() {
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tabs.Screen
        name="MyTrip"
        options={{
          tabBarLabel: t('tabs.myTrip.title'),
          tabBarIcon: ({ color }) => (
            <Ionicons name="location-sharp" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Discover"
        options={{
          tabBarLabel: t('tabs.discover.title'),
          tabBarIcon: ({ color }) => (
            <Ionicons name="globe-sharp" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: t('tabs.profile.title'),
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
