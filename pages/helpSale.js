import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Flex, WhiteSpace } from '@ant-design/react-native';
import { images } from '../utils/images';

const HelpSaleComponent = () => {
  return (
    <ScrollView>
      <Flex style={styles.container} justify="center">
        <Text style={styles.title}>卖币教程</Text>
      </Flex>
      <Image source={images.img_salecoin_01} style={styles.images} />
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
    height: 1100,
    width: '100%',
    marginTop: 31,
  },
});

HelpSaleComponent.title = '客服';
export default HelpSaleComponent;
