import { Image } from 'expo-image';
import { FlatList, Pressable, ScrollView, Text, View } from 'react-native';
import { Template } from '~/components/Template/Template';
import { shuttlesData } from '~/constants';

function Card({ title, image }: { title: string; image?: string }) {
  return (
    <Pressable className="w-full flex-row items-center gap-x-6 rounded-md border border-slate-700 p-4">
      <View className="">
        <Image
          style={{ width: 140, height: 80 }}
          source={image}
          contentFit="fill"
          transition={1000}
        />
      </View>

      <Text className="text-xl font-semibold text-white">{title}</Text>
    </Pressable>
  );
}

export function ShuttlesList() {
  return (
    <Template pageName="Shuttles">
      <View>
        <View className="gap-y-2">
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              gap: 8,
              paddingBottom: 20,
            }}
            data={shuttlesData}
            renderItem={({ item }) => <Card title={item.title} image={item.image} />}
          />
        </View>
      </View>
    </Template>
  );
}
