import React, { useState } from 'react';
import { useSelector, history } from 'umi';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { InputItem, Flex, WhiteSpace, WingBlank } from '@ant-design/react-native';
import { images } from '../utils/images';
import { Button } from 'react-native-paper';

const AuthHelpComponent = () => {
  return (
    <View>
      <Flex style={styles.container} justify="center">
        <Text style={styles.title}>实名认证</Text>
      </Flex>
      <Image source={images.img_realname_01} style={styles.images} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 107,
    width: '100%',
    backgroundColor: '#427BFF',
  },
  title: {
    fontWeight: '500',
    fontSize: 39,
    color: '#fff',
  },
  images: {
    height: 231,
    width: '100%',
    marginTop: 31
  },
});

AuthHelpComponent.title = '实名认证';
export default AuthHelpComponent;
