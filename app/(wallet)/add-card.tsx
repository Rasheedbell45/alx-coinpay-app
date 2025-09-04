// app/(wallet)/add-card.tsx
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function AddCard() {
  return (
    <View className="flex-1 p-6 bg-white">
      <Text className="text-2xl font-semibold mb-4">Add Card</Text>
      <TextInput placeholder="Card number" className="border rounded-md px-4 py-3 mb-3" keyboardType="number-pad" />
      <TextInput placeholder="Expiry" className="border rounded-md px-4 py-3 mb-3" />
      <TextInput placeholder="CVV" className="border rounded-md px-4 py-3 mb-3" keyboardType="number-pad" />
      <TouchableOpacity className="bg-[#34967C] py-3 rounded-md items-center">
        <Text className="text-white font-semibold">Save card</Text>
      </TouchableOpacity>
    </View>
  );
}
