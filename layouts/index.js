import React, {useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { Flex, Modal, InputItem, Button, WhiteSpace } from '@ant-design/react-native';
import {BackButton, connect, Redirect} from 'umi';
import { images } from '../utils/images';

function Layout({children, hasSignedIn, route, navigation}) {
  const [visible, setVisible] = useState(false);
  useLayoutEffect(() => {
    if (route.name === '/login' || route.name === '/' || route.name === '/help') {
      navigation.setOptions({ headerShown: false });
    } else if(route.name === '/market'){
      navigation.setOptions({
        headerShown: true,
        headerRight: () => (
          <TouchableOpacity activeOpacity={0.5} onPress={() => {setVisible(true)}}>
            <Flex>
              <Text style={styles.text}>筛选</Text>
              <Image source={images.icon_filter} style={styles.images} />
            </Flex>
          </TouchableOpacity>
        ),
      });
    } else {
      navigation.setOptions({ headerShown: true });
    }
  }, [navigation, route.name]);

  const onClose2 = () => {}
  return (
    <>
      <BackButton>{hasSignedIn || route.name === '/login' || route.name === '/register' ? children : <Redirect to="/login" push />}</BackButton>
      <Modal popup visible={visible} animationType="slide-up" onClose={onClose2} maskClosable={true}>
        <View style={styles.box}>
          <Flex style={styles.constainer} justify="center">
            <Image source={images.icon_filter_1} style={styles.images1} />
            <Text style={styles.text1}>筛选</Text>
          </Flex>
          <View style={styles.constainer2}>
            <Text style={styles.text2}>币数量</Text>
            <InputItem
              clear
              // value={this.state.value}
              onChange={(value) => {}}
              placeholder="请输入"
              type="number"
              last={true}
              style={styles.input}
            />
            <WhiteSpace size="lg" />
            <Text style={styles.text2}>付款方式</Text>
            <Flex justify="around" style={{ marginBottom: 40 }}>
              <Text style={styles.text3}>微信</Text>
              <Text style={styles.text3}>支付宝</Text>
              <Text style={styles.text3}>银联</Text>
            </Flex>
            <Flex justify="between" style={{ paddingHorizontal: 20 }}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  setVisible(false);
                }}
              >
                <Text style={styles.text3}>取消</Text>
              </TouchableOpacity>

              <Button
                type="primary"
                style={styles.button}
                onPress={() => {
                  setVisible(false);
                }}
              >
                确定
              </Button>
            </Flex>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height: 323,
  },
  constainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F4F4F4',
    borderBottomWidth: 1,
  },
  constainer2: {
    height: 200,
    paddingTop: 20,
  },
  images: {
    height: 15,
    width: 15,
    marginRight: 20,
  },
  images1: {
    height: 18,
    width: 16,
    marginRight: 5,
  },
  text: {
    marginRight: 5,
  },
  text1: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600',
  },
  text2: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 15,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#F4F4F4',
    padding: 10,
    borderRadius: 10,
  },
  text3: {
    marginLeft: 30,
    fontSize: 16,
    fontWeight: '500',
  },
  button: {
    width: 250,
    height: 38,
  },
});

export default connect(({user: {hasSignedIn}}) => ({
  hasSignedIn,
}))(Layout);
