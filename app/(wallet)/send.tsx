// app/(wallet)/send.tsx
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

export default function Send() {
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  const submit = () => {
    Alert.alert("Send", `Sending ${amount} to ${to}`);
  };

  return (
    <View className="flex-1 p-6 bg-white">
      <Text className="text-2xl font-semibold mb-4">Send</Text>
      <TextInput placeholder="Recipient" value={to} onChangeText={setTo} className="border rounded-md px-4 py-3 mb-3" />
      <TextInput placeholder="Amount" value={amount} onChangeText={setAmount} className="border rounded-md px-4 py-3 mb-3" keyboardType="decimal-pad"/>
      <TouchableOpacity className="bg-[#34967C] py-3 rounded-md items-center" onPress={submit}>
        <Text className="text-white font-semibold">Send</Text>
      </TouchableOpacity>
    </View>
  );
}
