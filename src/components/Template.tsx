import { Text, View } from 'react-native';
import { BackButton } from './BackButton';

type props = {
  children: React.ReactNode;
  logo?: React.ReactNode;
  pageName: string;
};

export function Template({ children, pageName, logo }: props) {
  return (
    <View className="relative flex-1  px-4 py-14">
      <View className="flex-row items-center">
        <BackButton onPress={() => {}} />
        {logo}
        <Text className="text-xl font-bold">{pageName}</Text>
      </View>
      {children}
    </View>
  );
}
