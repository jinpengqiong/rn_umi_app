import React, { useState } from 'react';
import { useSelector, history } from 'umi';
import { ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import { List, InputItem, Flex, WhiteSpace, WingBlank } from '@ant-design/react-native';
import { images } from '../utils/images';
import { Button, Avatar } from 'react-native-paper';

const EditProfileComponent = () => {
  const [NameValue, setNameValue] = useState('qqqq');
  return (
    <>
      <View style={{ backgroundColor: '#F2F7FA', position: 'relative', height: '100%' }}>
        <View style={{ width: '100%', height: 10, backgroundColor: '#F2F7FA' }}></View>
        <Flex style={{ backgroundColor: '#fff', height: 56 }} justify="between">
          <Avatar.Icon size={36} icon="account" style={{ backgroundColor: '#84DAAB', marginLeft: 10 }} />
          <Image source={images.icon_arrow} style={{ height: 2, width: 20, marginRight: 10 }} />
        </Flex>
        <View style={{ width: '100%', height: 10, backgroundColor: '#F2F7FA' }}></View>
        <Flex style={{ backgroundColor: '#fff', height: 56 }} justify="between">
          <Flex.Item>
            <Text style={{ fontWeight: '500', fontSize: 15, marginLeft: 10 }}>昵称</Text>
          </Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item>
            <InputItem
              clear
              value={NameValue}
              onChange={(value) => {
                setNameValue(value);
              }}
              placeholder="请输入昵称"
              last={true}
            />
          </Flex.Item>
        </Flex>
      </View>
      <WingBlank>
        <Button mode="contained" onPress={() => {}} style={{ position: 'absolute', bottom: 60, width: '100%', backgroundColor: '#4086F5', height: 38, lineHeight: 38, borderRadius: 10 }}>
          确认
        </Button>
      </WingBlank>
    </>
  );
};

EditProfileComponent.headerStyle = {
  backgroundColor: '#F2F6F9',
};
EditProfileComponent.title = '修改信息';
export default EditProfileComponent;
