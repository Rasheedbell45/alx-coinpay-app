// app/_layout.tsx
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import "@/styles/global.css";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}
