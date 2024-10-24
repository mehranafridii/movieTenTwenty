/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTab from '../../components/bottomTab/BotttomTab';
import {tabRoutes} from './TabRoutes';

const BottomTabStack = createBottomTabNavigator();

const routes = tabRoutes;

const TabStack = () => {
  return (
    <BottomTabStack.Navigator
      tabBar={props => <BottomTab {...props} />}
      screenOptions={{
        tabBarHideOnKeyboard: true,
      }}
      initialRouteName={routes[0]?.component}>
      {routes.map(data => {
        return (
          <BottomTabStack.Screen
            options={{headerShown: false}}
            name={data?.name}
            component={data?.component}
          />
        );
      })}
    </BottomTabStack.Navigator>
  );
};

export default TabStack;
