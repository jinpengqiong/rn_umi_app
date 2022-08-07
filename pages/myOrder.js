import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { InputItem, WingBlank, Flex, WhiteSpace, Button, Modal } from '@ant-design/react-native';
import { Avatar } from 'react-native-paper';

const MyOrderComponent = () => {
  const data = [
    {
      success: true,
      user: {
        username: '111111',
        payWay: 'zhifubao',
        price: 100.0,
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
      },
    },
    {
      success: true,
      user: {
        username: '22222',
        payWay: 'weixin',
        price: 200.0,
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
      },
    },
  ];
  return (
    <>
      <ScrollView
        style={{ flex: 1, backgroundColor: '#F2F6F9' }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}
      >
        <WingBlank size="lg">
          {data.map((item, index) => {
            return (
              <View style={{ position: 'relative', marginTop: 10, height: 92, borderRadius: 8, backgroundColor: '#FFFFFF' }} key={index}>
                <WingBlank size="lg">
                  <Flex justify="start">
                    <Avatar.Icon size={16} icon="book" style={{ marginTop: 10, marginRight: 5, backgroundColor: '#84DAAB' }} />
                    <Text style={{ marginTop: 10, fontWeight: '500', fontSize: 14, color: '#9A9A9A' }}>买家已下单，请卖家确定2022-07-19</Text>
                  </Flex>
                  <WhiteSpace />
                  <Flex justify="between" style={{ marginTop: 5 }}>
                    <Flex>
                      <Avatar.Icon size={32} icon="account" style={{ marginRight: 10 }} />
                      <Text style={{ fontWeight: '600', fontSize: 16, color: '#030303' }}>卫大民</Text>
                    </Flex>
                    <Text style={{ marginTop: 5, fontWeight: '500', fontSize: 15, color: '#9A9A9A' }}>$ 100.0</Text>
                  </Flex>
                </WingBlank>
              </View>
            );
          })}
        </WingBlank>
      </ScrollView>
    </>
  );
};

MyOrderComponent.title = '我的订单';
export default MyOrderComponent;
