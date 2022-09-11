import React, { useState } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import { Flex } from '@ant-design/react-native';
import { images } from '../utils/images';

const EmptyComponent = () => {
  return (
    <Flex justify="center" align="center" direction='column' style={{ marginTop: "50%" }}>
      <Image source={images.img_limit_nodata} style={{ height: 76, width: 56 }} />
      <Text style={{ color: '#BFBFBF', fontWeight:"400", fontSize: 14 }}>No Data</Text>
    </Flex>
  );
};

export default EmptyComponent;
