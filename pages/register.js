import React, { useState } from 'react';
import { Button, InputItem, WhiteSpace, Checkbox, WingBlank, Toast, Flex, Modal } from '@ant-design/react-native';
import { StatusBar, View, Image, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector, Redirect } from 'umi';
import Loading from '../components/Loading';
import { images } from '../utils/images';

const  RegisterPage = ({ history }) => {
  const dispatch = useDispatch();
  const [NameValue, setNameValue] = useState('');

  const { hasSignedIn, loading, username: _username, password: _password } = useSelector(
    ({ user: { hasSignedIn, username, password }, loading: { effects } }) => ({
      hasSignedIn,
      username,
      password,
      loading: effects['user/login'],
    })
  );
  const [username, setUsername] = useState(_username);
  const [password, setPassword] = useState(_password);
  const [checkCode, setCheckCode] = useState('');

  const onSubmit = () => {

  }

  return (
    <>
      <View style={styles.container}>
        <Flex justify="center" align="center" style={{ height: '25%' }}>
          <Image source={images.icon_head_portrait} style={styles.images1} />
        </Flex>
        <ScrollView style={styles.container2}>
          <WingBlank>
            <Text style={styles.title}>注册！</Text>
          </WingBlank>
          <WingBlank>
            <Text style={styles.title2}>用户名</Text>
          </WingBlank>
          <InputItem clear value={username} onChange={setUsername} placeholder="请输入用户名" />
          <WingBlank>
            <Text style={styles.title2}>昵称</Text>
          </WingBlank>
          <InputItem clear value={username} onChange={setUsername} placeholder="请输入昵称" />
          <WingBlank>
            <Text style={styles.title2}>密码</Text>
          </WingBlank>
          <InputItem clear value={password} onChange={setPassword} placeholder="请输入密码" />
          <InputItem clear value={password} onChange={setPassword} placeholder="请再次输入密码" />
          <WingBlank>
            <Text style={styles.title2}>支付密码</Text>
          </WingBlank>
          <InputItem clear value={checkCode} onChange={setCheckCode} placeholder="请输入支付密码" />
          <InputItem clear value={checkCode} onChange={setCheckCode} placeholder="请再次输入支付密码" />
          <View style={{ height: 10, backgroundColor: '#F2F7FA' }}></View>
          <InputItem clear value={checkCode} onChange={setCheckCode} placeholder="请输入验证码" />
          <View style={{ height: 10, backgroundColor: '#F2F7FA' }}></View>
          <WingBlank>
            <Button type="primary" onPress={onSubmit} style={{ marginTop: 10 }}>
              注册
            </Button>
          </WingBlank>
        </ScrollView>
      </View>
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

RegisterPage.title = '注册';

export default RegisterPage;
