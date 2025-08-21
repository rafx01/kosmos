import { Feather } from '@expo/vector-icons';
import { Text, TouchableHighlight, View } from 'react-native';

export const BackButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <Feather name="chevron-left" size={16} color="white" />
    </TouchableHighlight>
  );
};
