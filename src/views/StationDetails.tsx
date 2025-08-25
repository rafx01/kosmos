import { useRoute } from '@react-navigation/native';
import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import { Dimensions, View, Image as RNImage, Text, ScrollView } from 'react-native';
import { Template } from '~/components/Template/Template';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
export function StationDetails() {
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  const route = useRoute();

  const { width, height } = Dimensions.get('window');

  useEffect(() => {
    if (route?.params?.image) {
      RNImage.getSize(
        route?.params?.image,
        (originalWidth, originalHeight) => {
          const screenWidth = width - 24;
          const aspectRatio = originalHeight / originalWidth;
          const calculatedHeight = screenWidth * aspectRatio;

          setImageDimensions({
            width: screenWidth,
            height: calculatedHeight,
          });
        },
        (error) => {
          console.log('Erro ao obter dimensões da imagem:', error);
          setImageDimensions({
            width: width - 32,
            height: 300,
          });
        }
      );
    }
  }, [route?.params?.image]);

  return (
    <Template pageName={route?.params?.name}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="items-center">
          <Image
            style={imageDimensions}
            source={route?.params?.image}
            contentFit="fill"
            transition={1000}
          />
        </View>
        <View className="mt-5 gap-y-2 rounded-md border border-slate-700 p-4">
          <View className="flex-row justify-between">
            <View className="flex-row items-center gap-x-2">
              <Ionicons name="calendar-outline" size={20} color="white" />
              <Text className="font-medium text-white">Founded</Text>
            </View>
            <Text className="text-white">
              {new Date(route?.params?.founded).toLocaleDateString('pt-BR')}
            </Text>
          </View>
          <View className="flex-row justify-between">
            <View className="flex-row items-center gap-x-2">
              <MaterialCommunityIcons name="orbit" size={20} color="white" />
              <Text className="font-medium text-white">Orbit</Text>
            </View>
            <Text className="text-white">{route?.params?.orbit}</Text>
          </View>
          <View className="flex-row justify-between">
            <View className="flex-row items-center gap-x-2">
              <Ionicons name="planet-outline" size={20} color="white" />
              <Text className="font-medium text-white">Status</Text>
            </View>
            <Text className="text-white">{route?.params?.status.name}</Text>
          </View>
          <View className="flex-row gap-x-2">
            <Entypo name="open-book" size={20} color="white" />
            <Text className="font-medium text-white">Description:</Text>
          </View>
          <Text className="text-justify text-white">{route?.params?.description}</Text>
          <Text className="font-medium text-white">Gallery:</Text>
        </View>
      </ScrollView>
    </Template>
  );
}
