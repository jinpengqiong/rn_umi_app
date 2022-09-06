import React, { useState } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import { Flex } from '@ant-design/react-native';
import { images } from '../utils/images';

const EmptyComponent = () => {
  console.log('11111', 11111)
  return (
    <Flex justify="center" align="center">
      <Image source={images.img_limit_nodata} style={{ height:76, width: 56 }} />
    </Flex>
  );
};

export default EmptyComponent;
