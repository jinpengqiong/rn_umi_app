import React from 'react';
import { history } from 'umi';
import { Text, View, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon, List, WhiteSpace, WingBlank, Flex } from '@ant-design/react-native';
import { Button } from 'react-native-paper';
import { images } from '../utils/images';
const Item = List.Item;
const data = [
  { name: '实名认证', icon: images.icon_security1, path: '/helpAuth' },
  { name: '添加收付款', icon: images.icon_payment, path: '/helpFee' },
  { name: '买币', icon: images.icon_buycoins, path: '/helpBuy' },
];
const data2 = [
  { name: '卖币', icon: images.icon_selling_currency, path: '/helpSale' },
  { name: '充值', icon: images.icon_recharge, path: '/helpCharge' },
  { name: '提现', icon: images.icon_withdrawal, path: '/helpCash' },
];

const HelpComponent = () => {
  return (
    <>
      <ScrollView style={{ backgroundColor: '#e5f4ff', position: 'relative' }}>
        <View style={{ backgroundColor: '#3F87F7' }}>
          <Image source={images.img_bg_help} style={{ width: '100%', height: 242 }} />
          <View style={{ width: '100%', height: 251, backgroundColor: '#fff', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
            <WingBlank size="lg">
              <Text style={{ fontWeight: '500', fontSize: 18, color: '#030303', marginTop: 24 }}>客服</Text>
              <View style={{ height: 20, borderBottomWidth: 1, borderBottomColor: '#EFEFEE' }}></View>
              <View style={{ height: 184 }}>
                <Flex style={{ flex: 1, height: 111 }}>
                  {data.map((item, i) => (
                    <TouchableOpacity
                      key={i}
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
                  {data2.map((item, i) => (
                    <TouchableOpacity
                      key={i}
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
            </WingBlank>
          </View>
        </View>
        <WingBlank>
          <Button onPress={() => {}} style={styles.button} icon={() => <Image source={images.icon_customer_service} style={{ height: 14, width: 14 }} />} color="#fff" labelStyle={{ fontSize: 14 }}>
            客服
          </Button>
        </WingBlank>
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          history.push('/');
        }}
        style={{ position: 'absolute', top: 50, left: 20 }}
      >
        <Image source={images.icon_arrow_nav_white} style={{ width: 13, height: 13 }} />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: -110,
    width: '100%',
    backgroundColor: '#4086F5',
    borderRadius: 10,
    height: 38,
    color: '#fff',

  },
});

export default HelpComponent;
