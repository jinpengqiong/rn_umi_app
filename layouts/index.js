import React, {useLayoutEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Flex } from '@ant-design/react-native';
import {BackButton, connect, Redirect} from 'umi';
import { images } from '../utils/images';

function Layout({children, hasSignedIn, route, navigation}) {
  useLayoutEffect(() => {
    if (route.name === '/login' || route.name === '/' || route.name === '/help') {
      navigation.setOptions({ headerShown: false });
    } else if(route.name === '/market'){
      navigation.setOptions({
        headerShown: true,
        headerRight: () => (
          <TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
            <Flex>
              <Text style={styles.text}>筛选</Text>
              <Image source={images.icon_filter} style={styles.images} />
            </Flex>
          </TouchableOpacity>
        ),
      });
    } else {
      navigation.setOptions({ headerShown: true });
    }
  }, [navigation, route.name]);

  return <BackButton>{hasSignedIn || route.name === '/login' || route.name === '/register' ? children : <Redirect to="/login" push />}</BackButton>;
}

const styles = StyleSheet.create({
  images: {
    height: 15,
    width: 15,
    marginRight: 20,
  },
  text:{
    marginRight: 5
  }
});

export default connect(({user: {hasSignedIn}}) => ({
  hasSignedIn,
}))(Layout);
