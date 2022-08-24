import React, {useState, useEffect} from 'react';
import { Button, InputItem, WhiteSpace, Checkbox, WingBlank, Toast, Flex, Modal } from '@ant-design/react-native';
import { StatusBar, View, Image, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector, Redirect, history } from 'umi';
import Loading from '../components/Loading';
import { images } from '../utils/images';


const LoginPage = () => {
  const dispatch = useDispatch();
  const [NameValue, setNameValue] = useState('');
  const [visible, setVisible] = useState(false);

  const {
    hasSignedIn,
    loading,
    username: _username,
    password: _password,
  } = useSelector(
    ({
      user: {hasSignedIn, username, password},
      loading: {effects},
    }) => ({
      hasSignedIn,
      username,
      password,
      loading: effects['user/login'],
    }),
  );
  const [username, setUsername] = useState(_username);
  const [password, setPassword] = useState(_password);
  const [checkCode, setCheckCode] = useState('')

  function onSubmit() {
    if (!username || !password) {
      Toast.fail('请输入账号和密码！');
      return;
    }
    dispatch({
      type: 'user/login',
      payload: {
        username,
        password,
      },
    });
  }
  useEffect(() => {
    if (loading) {
      return <Loading />;
    }
    if (hasSignedIn) {
      history.push('/');
    }
  }, [])
  return (
    <>
      <View style={styles.container}>
        <Flex justify="center" align="center" style={{ height: '25%' }}>
          <Image source={images.icon_head_portrait} style={styles.images1} />
        </Flex>
        <View style={styles.container2}>
          <WingBlank>
            <Text style={styles.title}>欢迎使用！</Text>
          </WingBlank>
          <WingBlank>
            <Text style={styles.title2}>用户名</Text>
          </WingBlank>
          <InputItem clear value={username} onChange={setUsername} placeholder="请输入用户名" />
          <WingBlank>
            <Text style={styles.title2}>密码</Text>
          </WingBlank>
          <InputItem clear value={password} onChange={setPassword} placeholder="请输入密码" />
          <WingBlank>
            <Text style={styles.title2}>验证码</Text>
          </WingBlank>
          <InputItem clear value={checkCode} onChange={setCheckCode} placeholder="请输入验证码" />
          <WingBlank>
            <Button type="primary" onPress={onSubmit} style={{ marginTop: 40 }}>
              登录
            </Button>
            <Flex justify="between" align="center" style={{ marginTop: 20 }}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
                <Text style={styles.title3}>忘记密码</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  setVisible(true);
                }}
              >
                <Text style={styles.title4}>注册</Text>
              </TouchableOpacity>
            </Flex>
          </WingBlank>
        </View>
      </View>
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
        <Flex style={{ paddingHorizontal: 20, width: '100%', position: 'absolute', bottom: -65 }} justify="between">
          <Button
            style={{ height: 38, width: '45%', borderRadius: 50, backgroundColor: '#EFF0F1', color: '#B0B4C0' }}
            onPress={() => {
              setVisible(false);
            }}
          >
            取消
          </Button>
          <Button
            style={{ height: 38, width: '45%', borderRadius: '50%' }}
            type="primary"
            onPress={() => {
              setVisible(false);
              history.push('/register');
            }}
          >
            确认
          </Button>
          <WhiteSpace />
        </Flex>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F7FA',
  },
  container2: {
    backgroundColor: '#fff',
    height: '100%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  title: {
    marginTop: 20,
    marginBottom: 20,
    fontWeight: '700',
    fontSize: 26,
    color: '#4086F5',
  },
  title2: {
    marginTop: 10,
    fontWeight: '500',
    fontSize: 16,
  },
  title3: {
    fontWeight: '500',
    fontSize: 13,
    color: '#AFB4C5',
  },
  title4: {
    fontWeight: '500',
    fontSize: 13,
    color: '#4086F5',
  },
});

LoginPage.title = '登录';

export default LoginPage;
