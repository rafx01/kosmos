import './global.css';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import InitialScreen from '~/views/InitialScreen';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Spacecrafts } from '~/views/Spacecrafts';
import * as ScreenOrientation from 'expo-screen-orientation';
import { ShuttlesList } from '~/views/ShuttlesList';
import { ShuttleDetails } from '~/views/ShuttleDetails';
import { StationsList } from '~/views/StationsList';
import { StationDetails } from '~/views/StationDetails';

if (__DEV__) {
  require('./ReactotronConfig');
}

const Stack = createStackNavigator();

const navigationRef = createNavigationContainerRef();

ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar style="light" />
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#1A1A1D',
            },
            headerTintColor: '#fff',
            cardStyle: { backgroundColor: '#1A1A1D' },
          }}>
          <Stack.Screen
            name="InitialScreen"
            component={InitialScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Spacecrafts"
            component={Spacecrafts}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ShuttlesList"
            component={ShuttlesList}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ShuttleDetails"
            component={ShuttleDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StationsList"
            component={StationsList}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StationDetails"
            component={StationDetails}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
