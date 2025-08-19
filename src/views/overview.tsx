import { useNavigation } from '@react-navigation/native';
import { ScreenContent } from '~/components/ScreenContent';
import { Text, View } from 'react-native';
import { Button } from '../components/Button';

export default function Overview() {
  const navigation = useNavigation();

  return (
    <View className="h-full w-full bg-red-500">
      <ScreenContent path="screens/overview.tsx" title="Overview"></ScreenContent>
      <View className="bg-red-500">
        <Text>alo</Text>
      </View>
      <Button
        onPress={() =>
          navigation.navigate('Details', {
            name: 'Dan',
          })
        }
        title="Show Details"
      />
    </View>
  );
}
