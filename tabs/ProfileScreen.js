import React, { useState } from 'react';
import { Link, useDispatch } from 'umi';
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';
import { Icon, List, WhiteSpace, WingBlank, Button, Flex, Modal } from '@ant-design/react-native';
import { Avatar } from 'react-native-paper';
const Item = List.Item;

export default function ProfileScreen() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const handlePress = (e) => {
    dispatch({
      type: 'user/signOut',
    });
  };
  return (
    <>
      <ScrollView style={{ backgroundColor: '#e5f4ff', position: 'relative' }}>
        <Flex style={{ marginBottom: 10, height: 100, backgroundColor: '#fff' }} justify="between">
          <Flex style={{ marginLeft: 20, marginTop: 35 }} justify="start">
            <Avatar.Icon size={41} icon="account" style={{ backgroundColor: '#84DAAB' }} />
            <Text style={{ marginLeft: 5, fontWeight: '700', fontSize: 18 }}>RocKim</Text>
            <Icon name="edit" style={{ marginLeft: 5, fontSize: 18 }} color="#4086F5" />
          </Flex>
          <Flex style={{ width: 83, height: 27, backgroundColor: '#D4EBE2', marginTop: 35, borderTopLeftRadius: 15, borderBottomLeftRadius: 15 }} justify="around">
            <Avatar.Icon size={14} icon="wallet" style={{ backgroundColor: '#489C71' }} />
            <Text style={{ fontWeight: '400', fontSize: 14, color: '#489C71' }}>未实名</Text>
          </Flex>
        </Flex>
        <List style={{ marginBottom: 70 }}>
          <Link to="/verification" component={List.Item} arrow="horizontal" thumb={<Icon name="info-circle" />}>
            实名认证
          </Link>
          <Item extra="dfiljsklfjasdklj;askljf" arrow="empty" thumb={<Icon name="setting" />}>
            钱包地址
          </Item>
          <Link to="/changePassword" component={List.Item} arrow="horizontal" thumb={<Icon name="setting" />}>
            设置密码
          </Link>
          <Link to="/setPayCode" component={List.Item} arrow="horizontal" thumb={<Icon name="setting" />}>
            设置支付密码
          </Link>
          <List.Item thumb={<Icon name="setting" />} onPress={() => setVisible(true)} arrow="horizontal">
            用户须知
          </List.Item>
        </List>
        <WingBlank>
          <Flex direction="column">
            <Button type="primary" onPress={handlePress} style={{ width: '90%' }}>
              退出登录
            </Button>
            <Text style={{ fontWeight: '500', fontSize: 12, color: '#9497A0', marginTop: 10 }}>版本号： 2.5.6</Text>
          </Flex>
        </WingBlank>
      </ScrollView>
      <Modal popup visible={visible} animationType="slide-up" maskClosable={true} style={{ height: '65%' }}>
        <View style={{ paddingVertical: 20, paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: '#F4F4F4' }}>
          <Text style={{ textAlign: 'center', fontSize: 22, color: '#06060A' }}>用户须知</Text>
        </View>
        <ScrollView style={{ height: 420 }}>
          <WingBlank>
            <View>
              <Text style={{ fontWeight: '400', fontSize: 15 }}>
                GOPay是基于C2C原理开发的应用平台，交易是会员与会员之间的大厅互买模式。并非充值模式。 流程示范: 注册-绑定实名收付款信息-购买GOP币-到商户平台充
                值-提款下分GOP币-到我要卖币挂单【买家购头-买豕确认订单-买家付款-卖家核实收款转二无以X-交易过程当中，还有一些注意事项，请您务必阅读。
              </Text>
            </View>
            <WhiteSpace />
            <View>
              <Text style={{ fontWeight: '400', fontSize: 15 }}>
                第一:为了保证会员之间的交易安全，平台采取的是实名制用户认证，并终身无法修改认证信息! 会员必须遵
                守规定，严格启用本人身份信息,很仃账与石己寸不家付款时必须使用本人身份信息的银行卡或者其支付工 具来购买，如果使用他人银行账户代为付款,
                多有X可以不予确认收款。由于本人录入信息不符而造成的一 切损失，由会员自行承担，平台不负担任何责任
              </Text>
            </View>
            <WhiteSpace />
            <View>
              <Text style={{ fontWeight: '400', fontSize: 15 }}>
                第二:为了保证卖家的信息安全，请买家务必在有需求的时候再进行下单，如若发生恶意刷单，锁足买豕额度巾不付款的用户，平台将会自动风控冻结账户;卖币过程中，如果恶意暂停打币，故意为难买家，平台将会风控冻结账号。
              </Text>
            </View>
            <WhiteSpace />
            <View>
              <Text style={{ fontWeight: '400', fontSize: 15 }}>
                第二:为了保证卖家的信息安全，请买家务必在有需求的时候再进行下单，如若发生恶意刷单，锁足买豕额度巾不付款的用户，平台将会自动风控冻结账户;卖币过程中，如果恶意暂停打币，故意为难买家，平台将会风控冻结账号。
              </Text>
            </View>
            <WhiteSpace />
            <View>
              <Text style={{ fontWeight: '400', fontSize: 15 }}>
                第二:为了保证卖家的信息安全，请买家务必在有需求的时候再进行下单，如若发生恶意刷单，锁足买豕额度巾不付款的用户，平台将会自动风控冻结账户;卖币过程中，如果恶意暂停打币，故意为难买家，平台将会风控冻结账号。
              </Text>
            </View>
            <WhiteSpace />
          </WingBlank>
        </ScrollView>
        <View style={{ paddingHorizontal: 20, width: '100%', position: 'absolute', bottom: -80 }}>
          <Button
            style={{ height: 38, borderRadius: 8 }}
            type="primary"
            onPress={() => {
              setVisible(false);
            }}
          >
            确认
          </Button>
          <WhiteSpace />
        </View>
      </Modal>
    </>
  );
}
