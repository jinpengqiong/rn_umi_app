import React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';
import {  Flex } from '@ant-design/react-native';
import { images } from '../utils/images';

const AuthHelpComponent = () => {
  return (
    <ScrollView>
      <Flex style={styles.container} justify="center">
        <Text style={styles.title}>实名认证</Text>
      </Flex>
      <Image source={images.img_realname_01} style={styles.images} />
    </ScrollView>
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

AuthHelpComponent.title = '客服';
export default AuthHelpComponent;
