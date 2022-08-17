import React, { useState } from 'react';
import { useSelector, history } from 'umi';
import { ScrollView, Text, View, TouchableOpacity, RefreshControl } from 'react-native';
import { InputItem, WingBlank, Flex, WhiteSpace, Modal } from '@ant-design/react-native';
import { Avatar, Button } from 'react-native-paper';

const MarketComponent = () => {
  const [refresh, setRefresh] = useState(false)
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
  const handleRefresh = () => {
    console.log('handleRefresh triggered');
    setRefresh(true)
    setTimeout(() => {
      setRefresh(false);
      console.log('handleRefresh ended');
    }, 2000);
  }
  return (
    <>
      <ScrollView
        refreshControl={<RefreshControl refreshing={refresh} onRefresh={handleRefresh} />}
        style={{ flex: 1, backgroundColor: '#F2F6F9' }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}
      >
        <View style={{ position: 'relative', borderRadius: 8, backgroundColor: '#FFFFFF', borderRadius: 8 }}>
          {data.map((item, index) => {
            return (
              <WingBlank size="lg" key={index}>
                <Flex justify="between" style={{ backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: '#F4F4F4', height: 66 }}>
                  <Flex align="center">
                    <Avatar.Icon size={37} icon="account" style={{ marginRight: 10 }} />
                    <Flex direction="column" align="start">
                      <Text style={{ fontWeight: '500', fontSize: 11, color: '#595959' }}>
                        出售方式：<Text style={{ fontWeight: '500', fontSize: 11, color: '#CC5046' }}>不可拆分</Text>
                      </Text>
                      <Text style={{ fontWeight: '500', fontSize: 12, color: '#9A9A9A', marginTop: 5 }}>收款方式：</Text>
                    </Flex>
                  </Flex>
                  <Flex direction="column" align="center">
                    <Text style={{ fontWeight: '600', fontSize: 21, color: '#595959' }}>
                      1239.0<Text style={{ fontWeight: '600', fontSize: 7.73, color: '#9A9A9A'}}> GOP</Text>
                    </Text>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() => {
                        history.push('/buy');
                      }}
                    >
                      <Flex style={{ backgroundColor: '#BADCFF', width: 80, borderWidth: 0, borderRadius: 4, height: 24, lineHeight: 24 }}>
                        <Text style={{ color: '#4086F5', textAlign: 'center', paddingLeft: 27 }}>购买</Text>
                      </Flex>
                    </TouchableOpacity>
                  </Flex>
                </Flex>
              </WingBlank>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

MarketComponent.headerStyle = {
  backgroundColor: '#F2F6F9',
};
MarketComponent.title = '市场买卖';
export default MarketComponent;
