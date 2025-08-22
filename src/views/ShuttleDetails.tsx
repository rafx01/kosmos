import { useRoute } from '@react-navigation/native';
import { Image } from 'expo-image';
import { View } from 'react-native';
import { Template } from '~/components/Template/Template';

export function ShuttleDetails() {
  const route = useRoute();

  return (
    <Template pageName={route?.params?.id}>
      <View className="items-center">
        <Image
          style={{ width: '90%', height: '90%' }}
          source={require('../../assets/buranimage.jpg')}
          contentFit="fill"
          transition={1000}
        />
      </View>
    </Template>
  );
}
