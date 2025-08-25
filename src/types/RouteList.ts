import { ScreenProps } from 'react-native-screens';

export type RouteList = {
  InitialScreen: ScreenProps;
  Spacecrafts: ScreenProps;
  ShuttlesList: ScreenProps;
  ShuttleDetails: ScreenProps;
  StationsList: ScreenProps;
  StationDetails: {
    name: string;
    status: string;
    founded: string;
    description: string;
    orbit: string;
    image: string;
  };
};
