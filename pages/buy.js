import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { InputItem, WingBlank, Flex, WhiteSpace, Button, Modal } from '@ant-design/react-native';
import { Avatar } from 'react-native-paper';

const BuyComponent = () => {
  const [visible, setVisible] = useState(false);
  const onClose2 = () => {
    setVisible(false)
  };
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
          <View style={{ position: 'relative', marginTop: 20, height: 170, borderRadius: 10, backgroundColor: '#EEEEEE' }}>
            <WingBlank size="lg">
              <Flex justify="between" style={{ marginTop: 20, marginBottom: 10, color: '#999999' }}>
                <Text style={{ color: '#888888' }}>用户名</Text>
                <Text style={{ color: '#888888' }}>22222</Text>
              </Flex>
              <Flex justify="between" style={{ marginTop: 10, marginBottom: 10, color: '#999999' }}>
                <Text style={{ color: '#888888' }}>数量</Text>
                <Text style={{ color: '#888888' }}>100</Text>
              </Flex>
              <Flex justify="between" style={{ marginTop: 10, marginBottom: 10, color: '#999999' }}>
                <Text style={{ color: '#888888' }}>是否拆分</Text>
                <Text style={{ color: '#888888', color: 'red' }}>不可拆分</Text>
              </Flex>
              <Flex justify="between" style={{ marginTop: 10, marginBottom: 10, color: '#999999' }}>
                <Text style={{ color: '#888888' }}>收款方式</Text>
                <Text style={{ color: '#888888' }}>111</Text>
              </Flex>
              <Avatar.Icon size={30} icon="account" style={{ position: 'absolute', top: -10, left: '48%' }} />
            </WingBlank>
          </View>
          <WhiteSpace size="lg" />
          <View style={{ height: 420, borderRadius: 10, backgroundColor: '#fff' }}>
            <Flex justify="center" style={{ marginTop: 20, marginBottom: 10 }}>
              <Text style={{ fontSize: 15 }}>售卖数量（GOP）</Text>
            </Flex>
            <View style={{ marginTop: 10, backgroundColor: '#EEEEEE', marginLeft: 10, marginRight: 10, borderRadius: 5, marginBottom: 10 }}>
              <InputItem
                clear
                // value={this.state.value}
                onChange={(value) => {}}
                extra={<Text style={{ fontSize: 13, color: '#B58E4F' }}>全部</Text>}
                onExtraClick={() => {}}
                placeholder="请输入金额"
                type="number"
                last={true}
              />
            </View>
            <Flex justify="between" style={{ marginTop: 20, marginLeft: 15, marginRight: 15, marginBottom: 10 }}>
              <Text style={{ fontSize: 15 }}>支付金额：</Text>
              <Text style={{ fontSize: 15 }}>
                500 <Text style={{ color: '#030303', fontWeight: '900', fontSize: 13 }}>CNY</Text>
              </Text>
            </Flex>
            <Flex justify="between" style={{ marginTop: 20, marginLeft: 15, marginRight: 15, marginBottom: 20 }}>
              <Flex.Item style={{ fontSize: 15 }}>
                <Text>选择付款方式：</Text>
              </Flex.Item>
              <Flex.Item>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => {
                    setVisible(true);
                  }}
                >
                  <Text style={{ backgroundColor: '#F4F4F4', height: 30, lineHeight: 30, textAlign: 'center', color: '#9497A0' }}>选择付款方式</Text>
                </TouchableOpacity>
              </Flex.Item>
            </Flex>
            <View style={{ paddingLeft: 10, paddingRight: 10 }}>
              <Button type="primary">购买</Button>
            </View>
          </View>
        </WingBlank>
      </ScrollView>
      <Modal popup visible={visible} animationType="slide-up" onClose={onClose2} maskClosable={true}>
        <View style={{ paddingVertical: 20, paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: '#F4F4F4' }}>
          <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 17 }}>选择付款方式</Text>
        </View>
        <View style={{ paddingVertical: 20, paddingHorizontal: 20, marginBottom: 30 }}>
          <Text style={{ fontWeight: '500', fontSize: 16 }}>支付宝：*于天陈</Text>
        </View>
      </Modal>
    </>
  );
};

BuyComponent.title = '购买';
export default BuyComponent;
