import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import { FlatList, Pressable, Text, View } from 'react-native';
import { Template } from '~/components/Template/Template';
import { useGetSpaceStations } from '~/hooks/useGetSpaceStations';
import { RouteList } from '~/types/RouteList';

function Card({ title, image, onpress }: { title: string; image?: string; onpress?: () => void }) {
  return (
    <Pressable
      onPress={onpress}
      className="w-full flex-row items-center gap-x-6 rounded-md border border-slate-700 p-4">
      <View className="">
        <Image
          style={{ width: 140, height: 80 }}
          source={image}
          contentFit="fill"
          transition={1000}
        />
      </View>

      <Text className="text-lg font-semibold text-white">{title}</Text>
    </Pressable>
  );
}

export function StationsList() {
  const stations = useGetSpaceStations();
  const navigation = useNavigation<NavigationProp<RouteList>>();

  return (
    <Template pageName="Stations">
      <View className="gap-y-2">
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: 8,
            paddingBottom: 20,
          }}
          data={stations?.data?.results}
          renderItem={({ item }) => {
            return (
              <Card
                title={item?.name}
                image={item?.image?.image_url}
                onpress={() => {
                  navigation.navigate('StationDetails', {
                    description: item?.description,
                    founded: item?.founded,
                    name: item?.name,
                    orbit: item?.orbit,
                    status: item?.status,
                    image: item?.image?.image_url,
                  });
                }}
              />
            );
          }}
        />
      </View>
    </Template>
  );
}
