import { Feather } from '@expo/vector-icons';
import { Pressable, Text, TouchableHighlight, View } from 'react-native';

export const BackButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <Pressable onPress={onPress}>
      <Feather name="chevron-left" size={16} color="white" />
    </Pressable>
  );
};
