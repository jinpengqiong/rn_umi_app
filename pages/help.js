import React from 'react';
import { Link, useDispatch } from 'umi';
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';
import { Icon, List, WhiteSpace, WingBlank, Button, Flex } from '@ant-design/react-native';
import { Avatar } from 'react-native-paper';
import { images } from '../utils/images';
const Item = List.Item;

const HelpComponent = () => {
  return (
    <View>
      <Image
        source={images.img_bg_help}
        style={{ width: '100%', height: 400 }}
      />
    </View>
  );
}

export default HelpComponent;
