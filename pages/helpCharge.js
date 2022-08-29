import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Flex, WhiteSpace } from '@ant-design/react-native';
import { images } from '../utils/images';

const HelpChargeComponent = () => {
  return (
    <ScrollView>
      <Flex style={styles.container} justify="center">
        <Text style={styles.title}>卖币教程</Text>
      </Flex>
      <Image source={images.img_withdarw_01} style={styles.images} />
      <Image source={images.img_withdarw_02} style={styles.images1} />
      <Image source={images.img_withdarw_03} style={styles.images} />
      <WhiteSpace size="lg" />
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
    height: 230,
    width: '100%',
    marginTop: 31,
  },
  images1: {
    height: 260,
    width: '100%',
    marginTop: 31,
  },
});

HelpChargeComponent.title = '客服';
export default HelpChargeComponent;
