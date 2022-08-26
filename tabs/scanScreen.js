import React from 'react';
import { Link, useDispatch } from 'umi';
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';
import { Icon, List, WhiteSpace, WingBlank, Button, Flex } from '@ant-design/react-native';
import { Avatar } from 'react-native-paper';
const Item = List.Item;

const ScanScreenPage = () => {
  const dispatch = useDispatch();
  return (
    <ScrollView style={{ backgroundColor: '#e5f4ff' }}>
      <Text>
        111121212
      </Text>
    </ScrollView>
  );
}

export default ScanScreenPage
