// app/(auth)/verification.tsx
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function Verification() {
  const router = useRouter();
  return (
    <View className="flex-1 p-6 bg-white justify-center items-center">
      <Text className="text-2xl font-semibold mb-4">Account Verification</Text>
      <Text className="text-gray-600 mb-8">We sent a code to your email</Text>

      <TouchableOpacity
        className="bg-[#34967C] py-3 px-8 rounded-md"
        onPress={() => router.replace("/(home)/index")}
      >
        <Text className="text-white font-semibold">I'm Verified — Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
