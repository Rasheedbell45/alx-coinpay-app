// app/(auth)/onboarding.tsx
import { useRouter } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function Onboarding() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#0b1223] items-center justify-center p-6">
      <Image
        source={require("@/assets/images/hero-icon.png")}
        style={{ width: 140, height: 280, marginBottom: 30 }}
        resizeMode="contain"
      />
      <Text className="text-3xl text-white font-bold mb-2">CoinPay</Text>
      <Text className="text-center text-white/80 mb-8">
        A fast, secure crypto wallet for sending & receiving.
      </Text>

      <TouchableOpacity
        className="bg-[#34967C] px-8 py-3 rounded-full"
        onPress={() => router.push("/(auth)/register")}
      >
        <Text className="text-white font-semibold">Get Started</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="mt-4"
        onPress={() => router.push("/(auth)/register")}
      >
        <Text className="text-white/70">Already have an account? Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}
