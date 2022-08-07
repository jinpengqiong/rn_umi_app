import React, { useState } from 'react';
import { ScrollView, Text, View, RefreshControl } from 'react-native';
import { InputItem, WingBlank, Flex, WhiteSpace, Button, Modal } from '@ant-design/react-native';
import { Avatar } from 'react-native-paper';

const WalletRecordsComponent = () => {
  const [refresh, setRefresh] = useState(false);
  const handleRefresh = () => {
    console.log('handleRefresh triggered');
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
      console.log('handleRefresh ended');
    }, 2000);
  };
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
        refreshControl={<RefreshControl refreshing={refresh} onRefresh={handleRefresh} />}
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
                  <Flex justify="between" style={{ marginTop: 20 }}>
                    <Flex align="start">
                      <Avatar.Icon size={30} icon="account" style={{ marginRight: 10 }} />
                      <Flex direction="column" align="start">
                        <Text style={{ fontWeight: '600', fontSize: 15, color: '#06060A', marginBottom: 5 }}>转帐入</Text>
                        <Text style={{ fontWeight: '500', fontSize: 12, color: '#9A9A9A' }}>订单编号: trs20220719184119537</Text>
                        <Text style={{ fontWeight: '500', fontSize: 12, color: '#9A9A9A' }}>2022-07-19 18:41:19</Text>
                      </Flex>
                    </Flex>
                    <Text style={{ fontWeight: '900', fontSize: 18, color: '#06060A' }}>+ 100.0</Text>
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

WalletRecordsComponent.title = '钱包记录';
export default WalletRecordsComponent;
