import React, { useState } from 'react';
import { useSelector, history } from 'umi';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { InputItem, Flex, WhiteSpace, WingBlank } from '@ant-design/react-native';
import { images } from '../utils/images';
import { Button } from 'react-native-paper';

const HelpFeeComponent = () => {
  return (
    <View>
      <Flex style={styles.container} justify="center">
        <Text style={styles.title}>添加收付款信息</Text>
      </Flex>
      <Image source={images.img_addpay_01} style={styles.images} />
      <Image source={images.img_addpay_02} style={styles.images} />
      <Image source={images.img_addpay_03} style={styles.images} />
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
    marginTop: 31,
  },
});

HelpFeeComponent.title = '添加收付款信息';
export default HelpFeeComponent;
