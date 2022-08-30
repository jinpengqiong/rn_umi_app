import React, {useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { Flex, Modal, InputItem, Button, WhiteSpace, Radio } from '@ant-design/react-native';
import {BackButton, connect, Redirect} from 'umi';
import { SelectMultipleGroupButton } from 'react-native-selectmultiple-button';
import { images } from '../utils/images';

function Layout({children, hasSignedIn, route, navigation}) {
  const [visible, setVisible] = useState(false);
  const [interest, singleTapMultipleSelectedButtons] = useState([]);
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
  console.log('interest', interest)
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
            <View style={{ marginBottom: 40 }}>
              <SelectMultipleGroupButton
                group={[{ value: '微信' }, { value: '支付宝' }, { value: '银联' }]}
                containerViewStyle={{
                  justifyContent: 'space-around',
                }}
                buttonViewStyle={{
                  borderRadius: 10,
                  height: 40,
                  borderWidth: 0,
                }}
                textStyle={{
                  fontSize: 16,
                  color: '#4086F5',
                }}
                highLightStyle={{
                  borderColor: '#4086F5',
                  backgroundColor: 'transparent',
                  backgroundTintColor: '#4086F5',
                  borderTintColor: '#4086F5',
                  textColor: 'black',
                  textTintColor: '#fff',
                }}
                multiple={true}
                value={interest}
                defaultSelectedIndexes={[]}
                selected={interest}
                onSelectedValuesChange={(selectedValues) => {
                  singleTapMultipleSelectedButtons(selectedValues);
                }}
              />
            </View>
            <Flex justify="between" style={{ paddingHorizontal: 20, marginBottom: 20 }}>
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
    height: 50
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
