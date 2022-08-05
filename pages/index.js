import React from 'react';
import { StatusBar } from 'react-native';
import { Icon } from '@ant-design/react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../tabs/HomeScreen';
import ProfileScreen from '../tabs/ProfileScreen';
const { Navigator, Screen } = createBottomTabNavigator();

function IndexPage() {
  return (
    <>
      <StatusBar animated={true} translucent={true} />
      <Navigator>
        <Screen
          name="主页"
          options={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              // You can return any component that you like here!
              return <Icon size={size} name="home" color={color} />;
            },
          })}
          component={HomeScreen}
        />
        <Screen
          name="个人"
          options={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              // You can return any component that you like here!
              return <Icon size={size} name="profile" color={color} />;
            },
          })}
          component={ProfileScreen}
        />
      </Navigator>
    </>
  );
}
// IndexPage.headerLeft = '首页';
// IndexPage.headerTintColor = '#ccc';
// IndexPage.headerTitleStyle = {
//   fontWeight: 'bold',
// };
IndexPage.headerStyle = {
  backgroundColor: '#e5f4ff',
};

export default IndexPage;
