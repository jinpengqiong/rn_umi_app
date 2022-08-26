import React,{ useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image, Clipboard } from 'react-native';
import { Card, Grid, WhiteSpace, WingBlank, Carousel, Flex, Toast } from '@ant-design/react-native';
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
  { name: '帮助', icon: images.help, path: '/verification' },
  { name: '客服', icon: images.customerservice, path: '/feedback' },
];

export default function HomeScreen() {
  const copyToClipboard = async (Text) => {
    Clipboard.setString(Text);
    // const str = await Clipboard.getString()
  };
  return (
    <>
      <ScrollView style={styles.pageContainer}>
        <View>
          <WingBlank size="lg">
            <Flex style={{ height: 40, marginTop: 40, marginBottom: 10 }}>
              <Avatar.Icon size={30} icon="book" />
              <Flex direction="column">
                <Text style={{ marginLeft: 5, fontSize: 17 }}>Yu199603</Text>
                <Text style={{ marginLeft: 5, fontSize: 13, color: '#9A9A9A' }}>Yu199603</Text>
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
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() => {
                        copyToClipboard('dfiljsklfjasdklj;askljf');
                        Toast.info('复制成功');
                      }}
                    >
                      <Image source={images.copy} style={{ height: 18, width: 18, marginRight: 10 }} />
                    </TouchableOpacity>
                  </Flex>
                </View>
              </View>
              <Image source={images.bank} style={styles.position1} />
              <Image source={images.line} style={styles.position2} />
              <Image source={images.subscript} style={styles.position3} />
            </View>
            <Flex justify="around" align="center" style={{ position: 'absolute', top: 210, backgroundColor: '#fff', height: 89, width: '100%', zIndex: -1, borderRadius: 20 }}>
              <Flex direction="column" style={{ marginTop: 20 }}>
                <Text style={styles.textStyle}>0.0</Text>
                <Text style={styles.textStyle2}>可售数量</Text>
              </Flex>
              <Flex direction="column" style={{ marginTop: 20 }}>
                <Text style={styles.textStyle}>0.0</Text>
                <Text style={styles.textStyle2}>卖单数量</Text>
              </Flex>
              <Flex direction="column" style={{ marginTop: 20 }}>
                <Text style={styles.textStyle}>0.0</Text>
                <Text style={styles.textStyle2}>交易中</Text>
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
      </ScrollView>
      <Carousel autoplay infinite dots={false}>
        <View style={styles.containerHorizontal}>
          <Image source={images.banner} style={{ width: '100%', height: 84, borderRadius: 8 }} />
        </View>
      </Carousel>
    </>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: '#F2F6F9',
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 17,
    color: '#595959',
    fontWeight: '400',
  },
  textStyle2: {
    fontSize: 12,
    color: '#595959',
    fontWeight: '400',
  },
  position1: {
    position: 'absolute',
    top: 85,
    right: 18,
    width: 25,
    height: 14,
  },
  position2: {
    position: 'absolute',
    top: 105,
    height: 1,
    width: '97%',
    borderRadius: 1,
  },
  position3: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 93,
    height: 58,
  },
  position4: {
    position: 'absolute',
    top: 210,
    backgroundColor: '#fff',
    height: 89,
    width: '100%',
    zIndex: -1,
    borderRadius: 20,
  },
});