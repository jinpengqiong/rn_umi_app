import React, { useState } from 'react';
import { useSelector, history } from 'umi';
import { ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import { InputItem, Flex, WhiteSpace, WingBlank } from '@ant-design/react-native';
import { images } from '../utils/images';
import { Button } from 'react-native-paper';

const AuthComponent = () => {
  const [NameValue, setNameValue] = useState('');
  return (
    <>
      <View style={{ backgroundColor: '#fff', position: 'relative', height: '100%' }}>
        <View>
          <Image source={images.icon_bg_realname} style={{ width: '100%', height: 100 }} />
          <WingBlank>
            <Text style={{ marginTop: 10, fontWeight: '500', fontSize: 16 }}>姓名</Text>
          </WingBlank>
        </View>
        <View>
          <Image source={images.icon_faceid} style={{ width: '100%', height: 372 }} />
        </View>
      </View>
      <WingBlank>
        <Button mode="contained" onPress={() => {}} style={{ position: 'absolute', bottom: 20, width: '100%', backgroundColor: '#4086F5', height: 38, lineHeight: 38, borderRadius: 10 }}>
          下一步
        </Button>
      </WingBlank>
    </>
  );
};

AuthComponent.headerStyle = {
  backgroundColor: '#F2F6F9',
};
AuthComponent.title = '实名认证';
export default AuthComponent;
