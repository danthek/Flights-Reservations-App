import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUp, Login, Flights} from '../screens';
import {
  Destiny,
  Origin,
  Calendar,
  Passengers,
  Confirmation,
} from '../screens/Booking';

const Stack = createNativeStackNavigator();

const Routing = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Flights" component={Flights} />
        <Stack.Screen name="Origin" component={Origin} />
        <Stack.Screen name="Destiny" component={Destiny} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Passengers" component={Passengers} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
