// app/(auth)/account-setup.tsx
import { useState } from "react";
import { useRouter } from "expo-router";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function AccountSetup() {
  const router = useRouter();
  const [name, setName] = useState("");

  const handleNext = () => {
    // store name -> move to verification
    router.push("/(auth)/verification");
  };

  return (
    <View className="flex-1 p-6 bg-white justify-center">
      <Text className="text-2xl font-semibold mb-4">Account setup</Text>
      <Text className="text-gray-600 mb-4">Tell us about yourself</Text>

      <TextInput
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
        className="border border-gray-200 rounded-md px-4 py-3 mb-6"
      />

      <TouchableOpacity
        className="bg-[#34967C] py-3 rounded-md items-center"
        onPress={handleNext}
      >
        <Text className="text-white font-semibold">Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
