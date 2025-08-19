import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';

export const BackButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <View>
      <Feather name="chevron-left" size={16} color="#007AFF" />
      <Text onPress={onPress}>Back</Text>
    </View>
  );
};
