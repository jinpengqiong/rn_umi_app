import React, { useState } from 'react';
import { useSelector, history } from 'umi';
import { ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import { InputItem, List, Flex, WhiteSpace, WingBlank } from '@ant-design/react-native';
import { images } from '../utils/images';

const VerificationComponent = () => {
  const [NameValue, setNameValue] = useState('');
  return (
    <View style={{ backgroundColor: '#F2F7FA' }}>
      <View style={{ backgroundColor: '#fff' }}>
        <Image source={images.icon_bg_realname} style={{ width: '100%', height: 100 }} />
        <WingBlank>
          <Text style={{ marginTop: 10, fontWeight: '500', fontSize: 16 }}>姓名</Text>
        </WingBlank>
        <InputItem
          clear
          value={NameValue}
          onChange={(value) => {
            setNameValue(value);
          }}
          placeholder="请输入"
        />
        <WingBlank>
          <Text style={{ marginTop: 10, fontWeight: '500', fontSize: 16 }}>身份证号</Text>
        </WingBlank>
        <InputItem
          clear
          value={NameValue}
          onChange={(value) => {
            setNameValue(value);
          }}
          placeholder="请输入"
          last={true}
        />
      </View>
      <View style={{ backgroundColor: '#fff', marginTop: 10 }}>
        <WingBlank>
          <Text style={{ marginTop: 10, fontWeight: '500', fontSize: 16 }}>上传身份证照片</Text>
        </WingBlank>
        <Flex justify="between" style={{ marginTop: 20 }}>
          <Image source={images.img_IDcard_front} style={{ height: 90, width: 160, marginLeft: 18 }} />
          <Flex direction="column" align="center" style={{ marginRight: 33 }}>
            <Image source={images.icon_carmra} style={{ height: 32, width: 36 }} />
            <Text style={{ fontWeight: '500', fontSize: 12, color: '#4086F5' }}>正面照片</Text>
          </Flex>
        </Flex>
      </View>
    </View>
  );
};

VerificationComponent.headerStyle = {
  backgroundColor: '#F2F6F9',
};
VerificationComponent.title = '实名认证';
export default VerificationComponent;
