import React,{ useState } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import { InputItem, WingBlank, Flex, WhiteSpace, Button } from '@ant-design/react-native';
import { Checkbox } from 'react-native-paper';
import RadioGroup from 'react-native-custom-radio-group';
import { images } from '../utils/images';


const SalesComponent = () => {
  const [value, setValue] = useState('Second');
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState({
    weixin: false,
    zhifubao: false,
    yinlian: false,
  });
  const radioGroupList = [
    {
      label: '拆分',
      value: 'transport_car',
    },
    {
      label: '不拆分',
      value: 'transport_bike',
    },
  ];
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#F2F6F9' }}
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'handled'}
    >
      <WingBlank size="lg">
        <View style={{ marginTop: 20 }}>
          <Flex justify="between">
            <Text>可售余额</Text>
            <Text>0.00</Text>
          </Flex>
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
          <Flex justify="between" style={{ marginTop: 10, marginLeft: 15, marginRight: 15, marginBottom: 10 }}>
            <Text style={{ fontSize: 15 }}>出售方式：</Text>
            <Text style={{ fontSize: 15 }}>
              500 <Text style={{ color: '#030303', fontWeight: '900', fontSize: 13 }}>CNY</Text>
            </Text>
          </Flex>
          <Flex justify="between" style={{ marginTop: 10, marginLeft: 15, marginRight: 15, marginBottom: 10 }}>
            <Text style={{ fontSize: 15 }}>出售方式：</Text>
            <RadioGroup
              radioGroupList={radioGroupList}
              initialValue={selectedOption}
              onChange={setSelectedOption}
              containerStyle={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', width: 170 }}
              buttonContainerStyle={{ borderWidth: 0, width: 80, height: 40 }}
              buttonContainerActiveStyle={{ borderWidth: 0, width: 80, height: 40 }}
              buttonContainerInactiveStyle={{ border: 'none', width: 80, height: 40 }}
              buttonTextActiveStyle={{ fontSize: 14 }}
              buttonTextInactiveStyle={{ fontSize: 14 }}
              buttonTextStyle={{ fontSize: 14 }}
            />
          </Flex>
          <View style={{ marginTop: 18, marginLeft: 15, marginRight: 15 }}>
            <Text style={{ fontSize: 17 }}>选择收款方式（可多选）</Text>
          </View>
          {/* <RadioButton.Group onValueChange={(newValue) => setValue(newValue)} value={value}> */}
          <WingBlank size="lg">
            <Flex justify="around" style={{ marginTop: 30, marginBottom: 20 }}>
              <Flex justify="center">
                <Image source={images.icon_pay_wechat} style={{ width: 18, height: 18 }} />
                <Checkbox.Item
                  label="微信"
                  status={selectedOption2.weixin ? 'checked' : 'unchecked'}
                  onPress={() => {
                    selectedOption2.weixin = !selectedOption2.weixin;
                    setSelectedOption2(JSON.parse(JSON.stringify(selectedOption2)));
                  }}
                />
              </Flex>
              <Flex justify="center">
                <Image source={images.icon_pay_alipay} style={{ width: 18, height: 18 }} />
                <Checkbox.Item
                  label="支付宝"
                  status={selectedOption2.zhifubao ? 'checked' : 'unchecked'}
                  onPress={() => {
                    selectedOption2.zhifubao = !selectedOption2.zhifubao;
                    setSelectedOption2(JSON.parse(JSON.stringify(selectedOption2)));
                  }}
                />
              </Flex>
              <Flex justify="center">
                <Image source={images.icon_pay_chinabank} style={{ width: 18, height: 18 }} />
                <Checkbox.Item
                  label="银联"
                  status={selectedOption2.yinlian ? 'checked' : 'unchecked'}
                  onPress={() => {
                    selectedOption2.yinlian = !selectedOption2.yinlian;
                    setSelectedOption2(JSON.parse(JSON.stringify(selectedOption2)));
                  }}
                />
              </Flex>
            </Flex>
          </WingBlank>
          {/* </RadioButton.Group> */}
          <View style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Button type="primary">出售</Button>
          </View>
        </View>
      </WingBlank>
    </ScrollView>
  );
};
SalesComponent.title = '出售';
export default SalesComponent;