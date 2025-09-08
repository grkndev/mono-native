import TabBarComponent from "@/components/ui/tabbar";
import "@/global.css";
import { Tabs } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function TabBarLayout() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" translucent />
      <Tabs
        tabBar={(props) => <TabBarComponent {...props} />}
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          animation: "shift",
        }}
        safeAreaInsets={insets}
        // initialRouteName="(screens)"
      >
        <Tabs.Screen name="index" options={{ headerShown: false }} />
        <Tabs.Screen name="Explore" options={{ headerShown: false }} />
        <Tabs.Screen name="Notifications" options={{ headerShown: false }} />
        <Tabs.Screen name="Profile" options={{ headerShown: false }} />
      </Tabs>
    </SafeAreaView>
  );
}
