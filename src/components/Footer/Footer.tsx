import { Dimensions, Pressable, Text, TouchableHighlight, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RouteList } from '~/types/RouteList';

export function Footer() {
  const navigation = useNavigation<NavigationProp<RouteList>>();

  const data = [
    {
      title: 'Home',
      icon: <Ionicons name="home-outline" size={26} style={{ color: '#c72138' }} />,
      onPress: () => navigation.navigate('InitialScreen'),
    },
    {
      title: 'Mars',
      icon: <Ionicons name="planet-outline" size={26} style={{ color: '#c72138' }} />,
    },
    {
      title: 'Spacecrafts',
      icon: <Ionicons name="rocket-outline" size={26} style={{ color: '#c72138' }} />,
      onPress: () => navigation.navigate('Spacecrafts'),
    },
    {
      title: 'Menu',
      icon: <Ionicons name="rocket-outline" size={26} style={{ color: '#c72138' }} />,
    },
  ];

  return (
    <View
      className="w-full items-center justify-center bg-[#f4f5f7] pb-10"
      style={{ height: Dimensions.get('screen').height * 0.12 }}>
      <View className="w-full flex-row justify-between px-8">
        {data.map((item, index) => (
          <Pressable key={index} onPress={item.onPress} className=" items-center justify-center ">
            {item.icon}
          </Pressable>
        ))}
      </View>
    </View>
  );
}
