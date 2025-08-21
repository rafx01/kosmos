import { Text, View } from 'react-native';
import { BackButton } from './BackButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RouteList } from '~/types/RouteList';

type props = {
  children: React.ReactNode;
  logo?: React.ReactNode;
  pageName: string;
};

export function Template({ children, pageName, logo }: props) {
  const navigation = useNavigation<NavigationProp<RouteList>>();

  return (
    <View className="relative flex-1  px-4 py-14">
      <View className="flex-row items-center justify-center">
        <BackButton onPress={() => navigation.goBack()} />
        {logo}
        <Text className="text-xl font-bold text-white">{pageName}</Text>
      </View>
      {children}
    </View>
  );
}
