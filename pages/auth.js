import React, { useState } from 'react';
import { useSelector, history } from 'umi';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { InputItem, Flex, WhiteSpace, WingBlank } from '@ant-design/react-native';
import { images } from '../utils/images';
import { Button } from 'react-native-paper';

const AuthComponent = () => {
  const [NameValue, setNameValue] = useState('');
  return (
    <>
      <View style={styles.container}>
        <Image source={images.icon_bg_realname} style={styles.images1} />
        <Image source={images.icon_faceid} style={styles.images2} />
        <Flex direction="column" align="center">
          <Text style={styles.text1}>请录制视频</Text>
          <Text style={styles.text2}>读出数字</Text>
          <Text style={styles.text3}>
            在<Text style={styles.number}>5</Text>秒内完成
          </Text>
        </Flex>
        <WhiteSpace />
        <Flex justify="around" align="center" style={styles.container2}>
          <Flex direction="column" align="center">
            <Image source={images.icon_light} style={styles.images3} />
            <WhiteSpace />
            <Text style={styles.text3}>光线充足</Text>
          </Flex>
          <Flex direction="column" align="center">
            <Image source={images.icon_positive} style={styles.images3} />
            <WhiteSpace />
            <Text style={styles.text3}>正对手机</Text>
          </Flex>
          <Flex direction="column" align="center">
            <Image source={images.icon_face} style={styles.images3} />
            <WhiteSpace />
            <Text style={styles.text3}>脸无遮挡</Text>
          </Flex>
        </Flex>
      </View>
      <WingBlank>
        <Button mode="contained" onPress={() => {}} style={styles.button}>
          开启人脸识别
        </Button>
      </WingBlank>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    position: 'relative',
    height: '100%',
  },
  images1: {
    width: '100%',
    height: 100,
  },
  images2: {
    width: '100%',
    height: 372,
  },
  images3: {
    width: 18,
    height: 18,
  },
  text1: {
    fontWeight: '500',
    fontSize: 12,
    color: '#BFBFBF',
    paddingBottom: 14,
  },
  text2: {
    fontWeight: '500',
    fontSize: 16,
    color: '#4086F5',
    paddingBottom: 14,
  },
  text3: {
    fontWeight: '500',
    fontSize: 12,
    color: '#595959',
    paddingBottom: 20,
  },
  text4: {
    fontWeight: '500',
    fontSize: 10,
    color: '#9A9A9A',
  },
  number: {
    color: '#CC5046',
  },
  button: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    backgroundColor: '#4086F5',
    height: 38,
    lineHeight: 38,
    borderRadius: 10,
  },
  container2:{
    marginLeft: 60,
    marginRight: 60
  }
});

AuthComponent.headerStyle = {
  backgroundColor: '#F2F6F9',
};
AuthComponent.title = '实名认证';
export default AuthComponent;
