import './global.css';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import InitialScreen from '~/views/InitialScreen';
import Details from '~/views/Vehicles';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Vehicles from '~/views/Vehicles';
import * as ScreenOrientation from 'expo-screen-orientation';

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
            cardStyle: { backgroundColor: '#1A1A1D' }, // Background das telas
          }}>
          <Stack.Screen
            name="InitialScreen"
            component={InitialScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Vehicles" component={Vehicles} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
