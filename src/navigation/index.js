import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useRef} from 'react';
import AppStack from './app/AppStack';
import AuthStack from './auth/AuthStack';
import {navigationRef} from './NavigationService';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="AuthStack">
      <RootStack.Screen
        options={{headerShown: false}}
        name="AuthStack"
        component={AuthStack}
      />
      <RootStack.Screen
        options={{headerShown: false}}
        name="AppStack"
        component={AppStack}
      />
    </RootStack.Navigator>
  );
};

const Routes = () => {
  const routeNameRef = useRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;
        if (previousRouteName !== currentRouteName) {
        }
        routeNameRef.current = currentRouteName;
      }}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Routes;
