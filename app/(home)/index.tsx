// app/(home)/index.tsx
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import PropertyListing from "@/components/PropertyListing";
import { SAMPLE_DATA, FILTERS } from "@/constants/data";

export default function Home() {
  return (
    <View className="flex-1 bg-white">
      <View className="p-4">
        <Text className="text-2xl font-bold mb-2">Discover</Text>
        <Text className="text-gray-500">Find the best villas & stays</Text>
      </View>

      <View className="px-4">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-3">
          {FILTERS.map((f, i) => (
            <View key={i} className="bg-gray-100 py-2 px-3 mr-2 rounded-full">
              <Text>{f}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <ScrollView className="px-4">
        <PropertyListing listings={SAMPLE_DATA} />
      </ScrollView>
    </View>
  );
}
