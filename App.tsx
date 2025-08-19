import './global.css';
import 'react-native-gesture-handler';
import Navigation from './src/navigation';
import { createStackNavigator } from '@react-navigation/stack';
import Overview from '~/views/overview';
import Details from '~/views/details';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const navigationRef = createNavigationContainerRef();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Overview" component={Overview} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
