import { useNavigation } from '@react-navigation/native';
import { ScreenContent } from '~/components/ScreenContent';
import { Dimensions, ScrollView, Text, View, Image as RNImage } from 'react-native';
import { Button } from '../components/Button';
import { Template } from '~/components/Template';
import { TypewriterText } from '~/components/Typewriter';
import { useGetAPOD } from '~/hooks/useGetAPOD';
import { Image } from 'expo-image';
import { useState, useEffect } from 'react';

export default function InitialScreen() {
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  const navigation = useNavigation();

  const APOD = useGetAPOD();

  const { width, height } = Dimensions.get('window');

  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  useEffect(() => {
    if (APOD?.data?.url) {
      RNImage.getSize(
        APOD.data.url,
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
  }, [APOD?.data?.url, width]);

  return (
    <ScrollView className="bg-[#1A1A1D] px-4 py-14" showsVerticalScrollIndicator={false}>
      <View>
        <TypewriterText texts={['Kosmos', 'Kосмос', 'Space']} typeSpeed={150} deleteSpeed={150} />
      </View>
      <Text className="font-semibold text-white">NASA's Astronomy Picture of the Day:</Text>
      <Text className="pt-2 font-normal text-white">{APOD?.data?.title}</Text>
      <View className="items-center justify-center pt-2">
        <Image
          style={imageDimensions}
          placeholder={blurhash}
          contentFit="cover"
          transition={1000}
          source={{ uri: APOD?.data?.url }}
          onError={(error) => console.log('Erro ao carregar imagem:', error)}
        />
      </View>
      <Text className=" flex-row  text-xs font-light text-white">{APOD?.data?.copyright}</Text>
    </ScrollView>
  );
}
