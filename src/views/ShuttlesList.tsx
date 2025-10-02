import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import { FlatList, Pressable, ScrollView, Text, View } from 'react-native';
import { Template } from '~/components/Template/Template';
import { shuttlesData } from '~/constants';
import { RouteList } from '~/types/RouteList';

function Card({ title, image, onpress }: { title: string; image?: string; onpress?: () => void }) {
  return (
    <Pressable
      onPress={onpress}
      className="w-full flex-row items-center gap-x-6 rounded-md border border-slate-700 p-4">
      <View className="rounded-md bg-white">
        {image ? (
          <Image
            style={{ width: 140, height: 80 }}
            source={image}
            contentFit="fill"
            transition={1000}
          />
        ) : (
          <View className="h-[80px] w-[140px] items-center justify-center">
            <Text className="font-helvetica text-3xl font-bold ">{title}</Text>
          </View>
        )}
      </View>

      <Text className="text-xl font-semibold text-white">{title}</Text>
    </Pressable>
  );
}

export function ShuttlesList() {
  const navigation = useNavigation<NavigationProp<RouteList>>();

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
            renderItem={({ item }) => {
              return (
                <Card
                  title={item.title}
                  image={item.image}
                  onpress={() =>
                    navigation.navigate('ShuttleDetails', {
                      id: item.title,
                    })
                  }
                />
              );
            }}
          />
        </View>
      </View>
    </Template>
  );
}
