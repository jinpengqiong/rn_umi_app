import React, { useState } from 'react';
import { useSelector, history } from 'umi';
import { ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import { InputItem, Flex, WhiteSpace, WingBlank } from '@ant-design/react-native';
import { images } from '../utils/images';
import { Button } from 'react-native-paper';

const ChangePasswordComponent = () => {
  const [NameValue, setNameValue] = useState('');
  return (
    <>
      <View style={{ backgroundColor: '#F2F7FA', position: 'relative', height: '100%' }}>
        <WingBlank>
          <Text style={{ marginTop: 10, fontWeight: '500', fontSize: 16 }}>原密码</Text>
        </WingBlank>
        <InputItem
          clear
          value={NameValue}
          onChange={(value) => {
            setNameValue(value);
          }}
          placeholder="请输入原密码"
          last={true}
        />
        <WingBlank>
          <Text style={{ marginTop: 10, fontWeight: '500', fontSize: 16 }}>新密码</Text>
        </WingBlank>
        <InputItem
          clear
          value={NameValue}
          onChange={(value) => {
            setNameValue(value);
          }}
          placeholder="请输入新密码"
          last={true}
        />
        <WingBlank>
          <Text style={{ marginTop: 10, fontWeight: '500', fontSize: 16 }}>确认密码</Text>
        </WingBlank>
        <InputItem
          clear
          value={NameValue}
          onChange={(value) => {
            setNameValue(value);
          }}
          placeholder="请输入确认密码"
          last={true}
        />
      </View>
      <WingBlank>
        <Button mode="contained" onPress={() => {}} style={{ position: 'absolute', bottom: 60, width: '100%', backgroundColor: '#4086F5', height: 38, lineHeight: 38, borderRadius: 10 }}>
          确认
        </Button>
      </WingBlank>
    </>
  );
};

ChangePasswordComponent.headerStyle = {
  backgroundColor: '#F2F6F9',
};
ChangePasswordComponent.title = '设置密码';
export default ChangePasswordComponent;
