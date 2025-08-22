import { useNavigation } from '@react-navigation/native';
import { Dimensions, ScrollView, Text, View, Image as RNImage } from 'react-native';
import { TypewriterText } from '~/components/Typewriter/Typewriter';
import { useGetAPOD } from '~/hooks/useGetAPOD';
import { Image } from 'expo-image';
import { useState, useEffect } from 'react';
import { Footer } from '~/components/Footer/Footer';
import { useGetNextLaunches } from '~/hooks/useGetNextLaunches';

type launchProps = {
  image: string;
  date: string;
  name: string;
  launchSite: string;
};

function LaunchesCard({ image, date, name, launchSite }: launchProps) {
  return (
    <View className="w-full flex-row items-center gap-x-6 rounded-md border border-slate-700 p-4">
      <View>
        <Image
          style={{ width: 120, height: 140 }}
          source={image}
          contentFit="fill"
          transition={1000}
        />
      </View>
      <View className="w-full ">
        <Text className="text-sm font-semibold text-white">{name}</Text>
        <Text className="text-sm font-semibold text-white">
          {new Date(date).toLocaleString('pt-BR')}
        </Text>
        <Text className="text-sm font-semibold text-white">{launchSite}</Text>
      </View>
    </View>
  );
}

export default function InitialScreen() {
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  const navigation = useNavigation();

  const APOD = useGetAPOD();

  const nextLaunches = useGetNextLaunches();

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
    <>
      <ScrollView className=" px-4 pt-14" showsVerticalScrollIndicator={false}>
        <View>
          <TypewriterText texts={['Kosmos', 'Kосмос']} typeSpeed={150} deleteSpeed={150} />
        </View>
        <Text className="text-xl font-semibold text-white">
          NASA's Astronomy Picture of the Day:
        </Text>
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
        <Text className="pt-4 text-xl font-semibold text-white">Upcoming Launches:</Text>
        {/* <LaunchesCard
          date={nextLaunches.data?.results[0]?.net}
          image={nextLaunches.data?.results[0]?.image?.image_url}
          launchSite={nextLaunches.data?.results[0]?.pad?.name}
          name={nextLaunches.data?.results[0]?.name}
        /> */}
        <View style={{ gap: 8, paddingTop: 8 }}>
          {nextLaunches.data?.results.map((item: any) => {
            return (
              <LaunchesCard
                date={item?.net}
                image={item?.image?.image_url}
                launchSite={item?.pad?.name}
                name={item?.name}
                key={item.id}
              />
            );
          })}
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}
