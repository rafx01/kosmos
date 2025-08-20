import { Dimensions, Text, TouchableHighlight, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const data = [
  {
    title: 'Home',
    icon: <Ionicons name="home-outline" size={26} style={{ color: '#c72138' }} />,
  },
  {
    title: 'Mars',
    icon: <Ionicons name="planet-outline" size={26} style={{ color: '#c72138' }} />,
  },
  {
    title: 'Vehicles',
    icon: <Ionicons name="rocket-outline" size={26} style={{ color: '#c72138' }} />,
  },
  {
    title: 'Vehicles',
    icon: <Ionicons name="rocket-outline" size={26} style={{ color: '#c72138' }} />,
  },
];

export function Footer() {
  return (
    <View
      className="w-full items-center justify-center bg-[#f4f5f7] pb-10"
      style={{ height: Dimensions.get('screen').height * 0.12 }}>
      <View className="w-full flex-row justify-between px-8">
        {data.map((item, index) => (
          <TouchableHighlight key={index} className=" items-center justify-center ">
            {item.icon}
          </TouchableHighlight>
        ))}
      </View>
    </View>
  );
}
