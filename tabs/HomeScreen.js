import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Card, Grid, WhiteSpace, WingBlank, Icon, Flex } from '@ant-design/react-native';
import { useSelector, history } from 'umi';
import { Avatar } from 'react-native-paper';
import { images } from '../utils/images';

const data = [
  { name: '我的挂单', icon: images.mybill, path: '/myList' },
  { name: '我的订单', icon: images.myorder, path: '/myOrder' },
  { name: '钱包记录', icon: images.walletrecords, path: '/walletRecords' },
];
const data2 = [
  { name: '收付款信息', icon: images.collection, path: '/payMethods' },
  { name: '帮助', icon: images.help, path: '/feedback' },
  { name: '客服', icon: images.customerservice, path: '/feedback' },
];

export default function HomeScreen() {
  const handlePress = (el, index) => {
    history.push(el.path);
  };
  return (
    <>
      <ScrollView style={{ backgroundColor: '#F2F6F9' }}>
        <View>
          <WingBlank size="lg">
            <Flex style={{ height: 40, marginTop: 40, marginBottom: 10 }}>
              <Avatar.Icon size={30} icon="book" />
              <Flex direction="column">
                <Text style={{ marginLeft: 5, fontSize: 15 }}>Yu199603</Text>
                <Text style={{ marginLeft: 5, fontSize: 12 }}>Yu199603</Text>
              </Flex>
            </Flex>
            <View style={{ backgroundColor: '#5B5B5B', borderRadius: 20, position: 'relative' }}>
              <View style={{ marginTop: 10, fontSize: 15 }}>
                <Text style={{ color: '#fff', paddingLeft: 20 }}>余额（GOP）</Text>
              </View>
              <View style={{ height: 118 }}>
                <View style={{ height: 60 }}>
                  <Text style={{ marginLeft: 16, fontSize: 50, color: '#fff' }}>0.0</Text>
                </View>
                <View style={{ marginTop: 6, marginLeft: 10, marginRight: 10 }}>
                  <Flex align="center" justify="between" style={{ height: 60 }}>
                    <Flex>
                      <Image source={images.walletaddress} style={{ height: 18, width: 18, marginRight: 5 }} />
                      <Text style={{ color: '#9A9A9A' }}>钱包地址：</Text>
                      <Text style={{ color: '#F5FCFF' }}>bdja39dsadda242342342</Text>
                    </Flex>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
                      <Image source={images.copy} style={{ height: 18, width: 18, marginRight: 10  }} />
                    </TouchableOpacity>
                  </Flex>
                </View>
              </View>
              <Image source={images.bank} style={{ position: 'absolute', top: 60, right: 10,  }} />
            </View>
            <Flex justify="around" align="center" style={{ position: 'absolute', top: 210, backgroundColor: '#fff', height: 89, width: '100%', zIndex: -1, borderRadius: 20 }}>
              <Flex direction="column" style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 17, color: '#595959', fontWeight: '400' }}>0.0</Text>
                <Text style={{ fontSize: 12, color: '#595959', fontWeight: '400' }}>可售数量</Text>
              </Flex>
              <Flex direction="column" style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 17, color: '#595959', fontWeight: '400' }}>0.0</Text>
                <Text style={{ fontSize: 12, color: '#595959', fontWeight: '400' }}>卖单数量</Text>
              </Flex>
              <Flex direction="column" style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 17, color: '#595959', fontWeight: '400' }}>0.0</Text>
                <Text style={{ fontSize: 12, color: '#595959', fontWeight: '400' }}>交易中</Text>
              </Flex>
            </Flex>
            <View style={{ height: 80, clear: 'both' }}></View>
          </WingBlank>
        </View>
        <WingBlank size="lg">
          <Flex justify="between" align="center" style={{ backgroundColor: '#fff', padding: 10, borderRadius: 10 }}>
            <View style={{ paddingLeft: 10, paddingRight: 10, borderRadius: 10, width: '50%' }}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  history.push('/market');
                }}
              >
                <Flex style={{ backgroundColor: '#E2F7F0', height: 40, width: '100%' }} justify="center" align="center">
                  <Image source={images.buy} style={{ height: 18, width: 18, marginRight: 5 }} />
                  <Text style={{ color: '#35CE9A', fontSize: 14 }}>购买</Text>
                </Flex>
              </TouchableOpacity>
            </View>
            <View style={{ paddingLeft: 10, paddingRight: 10, borderRadius: 10, width: '50%' }}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  history.push('/sales');
                }}
              >
                <Flex style={{ backgroundColor: '#DCEDFF', height: 40, width: '100%' }} justify="center" align="center">
                  <Image source={images.sales} style={{ height: 18, width: 18, marginRight: 5 }} />
                  <Text style={{ color: '#4086F5', fontSize: 14 }}>出售</Text>
                </Flex>
              </TouchableOpacity>
            </View>
          </Flex>
        </WingBlank>
        <WhiteSpace size="lg" />
        <View style={{ backgroundColor: '#fff' }}>
          {/* <Grid data={data2} columnNum={3} hasLine={false} onPress={handlePress} itemStyle={{ fontSize: 100 }} /> */}
          <Flex style={{ flex: 1, height: 111 }}>
            {data.map((item) => (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  history.push(item.path);
                }}
                style={{ width: '33%' }}
              >
                <Flex direction="column">
                  <Image source={item.icon} style={{ height: 26, width: 26 }} />
                  <WhiteSpace size="lg" />
                  <Text>{item.name}</Text>
                </Flex>
              </TouchableOpacity>
            ))}
          </Flex>
          <Flex style={{ flex: 1, height: 111 }}>
            {data2.map((item) => (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  history.push(item.path);
                }}
                style={{ width: '33%' }}
              >
                <Flex direction="column">
                  <Image source={item.icon} style={{ height: 26, width: 26 }} />
                  <WhiteSpace size="lg" />
                  <Text style={{ fontWeight: '400', fontSize: 14, color: '#06060A' }}>{item.name}</Text>
                </Flex>
              </TouchableOpacity>
            ))}
          </Flex>
        </View>
      </ScrollView>
    </>
  );
}