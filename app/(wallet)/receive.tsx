// app/(wallet)/receive.tsx
import { View, Text, Image } from "react-native";

export default function Receive() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-semibold mb-4">Receive</Text>
      {/* placeholder for QR, address */}
      <Image source={require("@/assets/images/qrcode-placeholder.png")} style={{ width: 220, height: 220 }} />
      <Text className="mt-4 text-gray-600">Scan to receive funds</Text>
    </View>
  );
}
