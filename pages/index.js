import React from 'react';
import { StatusBar,Image } from 'react-native';
import { Icon } from '@ant-design/react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../tabs/HomeScreen';
import ProfileScreen from '../tabs/ProfileScreen';
import ScanScreenPage from '../tabs/scanScreen';
const { Navigator, Screen } = createBottomTabNavigator();
import { images } from '../utils/images';

const  IndexPage = () => {
  return (
    <>
      <StatusBar animated={true} translucent={true} />
      <Navigator>
        <Screen
          name="主页"
          options={({ route }) => ({
            // tabBarLabel: '主页',
            tabBarIcon: ({ focused, color, size }) => {
              // You can return any component that you like here!
              return <Icon size={size} name="home" color={color} />;
            },
          })}
          component={HomeScreen}
        />
        <Screen
          name=" "
          options={({ route }) => ({
            // tabBarLabel: 'Scan',
            tabBarIcon: ({ focused, color, size }) => {
              // You can return any component that you like here!
              return <Image source={images.scan_1} style={{ position: 'absolute', bottom: 0, width: 60, height: 60, zIndex: 100000 }} />;
            },
          })}
          component={ProfileScreen}
        />
        <Screen
          name="个人"
          options={({ route }) => ({
            // tabBarLabel: '个人',
            tabBarIcon: ({ focused, color, size }) => {
              // You can return any component that you like here!
              return <Icon size={size} name="user" color={color} />;
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
