import { Pressable, Text, View } from 'react-native';
import { Template } from '~/components/Template/Template';
import { Image } from 'expo-image';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RouteList } from '~/types/RouteList';

function Card({ title, image, onpress }: { title?: string; image?: string; onpress?: () => void }) {
  return (
    <Pressable
      onPress={onpress}
      className="w-full flex-row items-center gap-x-4 rounded-md border border-slate-700 p-4">
      <View>
        <Image
          style={{ width: 80, height: 80 }}
          source={image}
          contentFit="fill"
          transition={1000}
        />
      </View>

      <Text className="text-xl font-semibold text-white">{title}</Text>
    </Pressable>
  );
}

export function Spacecrafts() {
  const navigation = useNavigation<NavigationProp<RouteList>>();

  const data = [
    {
      title: 'Space Shuttles',
      image: require('../../assets/shuttle2.png'),
      onpress: () => navigation.navigate('ShuttlesList'),
    },
    ,
    {
      title: 'Space stations',
      image: require('../../assets/mir.png'),
      onpress: () => navigation.navigate('StationsList'),
    },
    // ,{
    //   title: 'Missions',
    //   icon:
    // }
  ];

  return (
    <Template pageName="Spacecrafts">
      <View className="gap-y-2">
        {data.map((item, index) => (
          <Card key={index} title={item?.title} image={item?.image} onpress={item?.onpress} />
        ))}
      </View>
    </Template>
  );
}
