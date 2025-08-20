import './global.css';
import 'react-native-gesture-handler';
import Navigation from './src/navigation';
import { createStackNavigator } from '@react-navigation/stack';
import InitialScreen from '~/views/InitialScreen';
import Details from '~/views/details';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

if (__DEV__) {
  require('./ReactotronConfig');
}

const Stack = createStackNavigator();

const navigationRef = createNavigationContainerRef();

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
        <Stack.Navigator>
          <Stack.Screen
            name="InitialScreen"
            component={InitialScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
