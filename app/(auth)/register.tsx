// app/(auth)/register.tsx
import { useState } from "react";
import { useRouter } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    if (!email || !password) {
      Alert.alert("Error", "Email and password required");
      return;
    }
    // placeholder registration flow
    router.push("/(auth)/account-setup");
  };

  return (
    <View className="flex-1 bg-white p-6 justify-center">
      <Text className="text-2xl font-bold mb-4">Create Account</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="border border-gray-200 rounded-md px-4 py-3 mb-3"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        className="border border-gray-200 rounded-md px-4 py-3 mb-6"
        secureTextEntry
      />

      <TouchableOpacity
        className="bg-[#34967C] py-3 rounded-md items-center mb-3"
        onPress={submit}
      >
        <Text className="text-white font-semibold">Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(auth)/onboarding")}>
        <Text className="text-center text-gray-600">Back</Text>
      </TouchableOpacity>
    </View>
  );
}
