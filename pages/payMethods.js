import React, { useState } from 'react';
import { useSelector, history } from 'umi';
import { ScrollView, Text, View, RefreshControl } from 'react-native';
import { InputItem, WingBlank, Flex, Icon, Modal } from '@ant-design/react-native';
import { Button } from 'react-native-paper';

const PayMethodsComponent = () => {
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
        payWay: '支付宝',
        price: 100.0,
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
      },
      color: '#4086F5',
      iconName: 'alipay-circle',
    },
    {
      success: true,
      user: {
        username: '22222',
        payWay: '微信',
        price: 200.0,
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
      },
      color: '#50AF32',
      iconName: 'wechat',
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
              <View style={{ position: 'relative', marginTop: 20, height: 120, borderRadius: 8, backgroundColor: item.color }} key={index}>
                <WingBlank size="lg">
                  <Flex justify="between" style={{ marginTop: 30 }}>
                    <Flex>
                      <Icon name={item.iconName} color="#FFFFFF" style={{ marginRight: 10 }} size={40} />
                      <Flex direction="column" align="start">
                        <Text style={{ fontWeight: '600', fontSize: 18, color: '#FFFFFF', marginBottom: 5 }}>{item.user.payWay}</Text>
                        <Text style={{ fontWeight: '500', fontSize: 14, color: '#FFFFFF' }}>{item.user.payWay}：* 李大卫</Text>
                      </Flex>
                    </Flex>
                    <Icon name="delete" color="#FFFFFF" />
                  </Flex>
                </WingBlank>
              </View>
            );
          })}
        </WingBlank>
      </ScrollView>
      <WingBlank size="lg">
        <Button
          icon="plus-circle"
          mode="contained"
          onPress={() => history.push('/addPayMethod')}
          style={{ position: 'absolute', bottom: 20, width: '100%', backgroundColor: '#4086F5', height: 38, lineHeight: 38, borderRadius: 10 }}
        >
          增加收付款信息
        </Button>
      </WingBlank>
    </>
  );
};

PayMethodsComponent.title = '收付款信息';
export default PayMethodsComponent;
