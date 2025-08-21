import { Pressable, Text, View } from 'react-native';
import { Template } from '~/components/Template';
import { Image } from 'expo-image';

function Card({ title, image }: { title: string; image?: string }) {
  return (
    <Pressable className="w-full flex-row items-center gap-x-4 rounded-md border border-slate-700 p-4">
      <View className="">
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

export default function Vehicles() {
  const data = [
    {
      title: 'Space Shuttles',
      image: require('../../assets/shuttle2.png'),
    },
    // ,{
    //   title: 'Rockets',
    //   icon:
    // },{
    //   title: 'Missions',
    //   icon:
    // }
  ];

  return (
    <Template pageName="Vehicles">
      <View className="space-y-2">
        {data.map((item, index) => (
          <Card key={index} title={item.title} image={item.image} />
        ))}
      </View>
    </Template>
  );
}
