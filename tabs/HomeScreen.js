import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Card, Grid, WhiteSpace, WingBlank, Icon, Flex } from '@ant-design/react-native';
import { useSelector, history } from 'umi';
import { Avatar } from 'react-native-paper';

const data = Array.from(new Array(12)).map((_val, i) => ({
  icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  text: `Name${i}`,
}));

export default function HomeScreen() {
  const handlePress = (el, index) => {
    history.push(el.path);
  }
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
                      <Icon name="account-book" size="sm" color="#9A9A9A" />
                      <Text style={{ color: '#9A9A9A' }}>钱包地址：</Text>
                      <Text style={{ color: '#F5FCFF' }}>bdja39dsadda242342342</Text>
                    </Flex>
                    <Text>
                      <Icon name="copy" size="sm" color="#F5FCFF" />
                    </Text>
                  </Flex>
                </View>
              </View>
            </View>
            <Flex justify="around" align="center" style={{ position: 'absolute', top: 210, backgroundColor: '#fff', height: 89, width: '100%', zIndex: -1, borderRadius: 20 }}>
              <Flex direction="column" style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 17 }}>0.0</Text>
                <Text style={{ fontSize: 12 }}>可售数量</Text>
              </Flex>
              <Flex direction="column" style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 17 }}>0.0</Text>
                <Text style={{ fontSize: 12 }}>卖单数量</Text>
              </Flex>
              <Flex direction="column" style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 17 }}>0.0</Text>
                <Text style={{ fontSize: 12 }}>交易中</Text>
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
                <Text style={{ backgroundColor: '#E2F7F0', height: 40, lineHeight: 40, textAlign: 'center', color: '#35CE9A' }}>购买</Text>
              </TouchableOpacity>
            </View>
            <View style={{ paddingLeft: 10, paddingRight: 10, borderRadius: 10, width: '50%' }}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  history.push('/sales');
                }}
              >
                <Text style={{ backgroundColor: '#DCEDFF', height: 40, lineHeight: 40, textAlign: 'center', color: '#4086F5' }}>出售</Text>
              </TouchableOpacity>
            </View>
          </Flex>
        </WingBlank>
        <WhiteSpace size="lg" />
        <View style={{ backgroundColor: '#fff' }}>
          <Grid data={data2} columnNum={3} hasLine={false} onPress={handlePress} itemStyle={{ fontSize: 100 }} />
        </View>
        <Image source={{ uri: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png' }} />
      </ScrollView>
    </>
  );
}