import { Text, View } from 'react-native';

import { EditScreenInfo } from './EditScreenInfo';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <View className="bg-red-500">
      <Text>{title}</Text>
      <View />
      <EditScreenInfo path={path} />
      {children}
    </View>
  );
};
