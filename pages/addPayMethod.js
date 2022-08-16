import React, { useState } from 'react';
import { useSelector, history } from 'umi';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { WhiteSpace, WingBlank, Flex, Icon, Modal, InputItem } from '@ant-design/react-native';
import RadioGroup from 'react-native-custom-radio-group';


const PayMethodsComponent = () => {
  const bankList = [
    {
      value: 'CDB',
      text: '国家开发银行',
    },
    {
      value: 'ICBC',
      text: '中国工商银行',
    },
    {
      value: 'ABC',
      text: '中国农业银行',
    },
    {
      value: 'BOC',
      text: '中国银行',
    },
    {
      value: 'CCB',
      text: '中国建设银行',
    },
    {
      value: 'PSBC',
      text: '中国邮政储蓄银行',
    },
    {
      value: 'COMM',
      text: '交通银行',
    },
    {
      value: 'CMB',
      text: '招商银行',
    },
    {
      value: 'SPDB',
      text: '上海浦东发展银行',
    },
    {
      value: 'CIB',
      text: '兴业银行',
    },
    {
      value: 'HXBANK',
      text: '华夏银行',
    },
    {
      value: 'GDB',
      text: '广东发展银行',
    },
    {
      value: 'CMBC',
      text: '中国民生银行',
    },
    {
      value: 'CITIC',
      text: '中信银行',
    },
    {
      value: 'CEB',
      text: '中国光大银行',
    },
    {
      value: 'EGBANK',
      text: '恒丰银行',
    },
    {
      value: 'CZBANK',
      text: '浙商银行',
    },
    {
      value: 'BOHAIB',
      text: '渤海银行',
    },
    {
      value: 'SPABANK',
      text: '平安银行',
    },
    {
      value: 'SHRCB',
      text: '上海农村商业银行',
    },
    {
      value: 'YXCCB',
      text: '玉溪市商业银行',
    },
    {
      value: 'YDRCB',
      text: '尧都农商行',
    },
    {
      value: 'BJBANK',
      text: '北京银行',
    },
    {
      value: 'SHBANK',
      text: '上海银行',
    },
    {
      value: 'JSBANK',
      text: '江苏银行',
    },
    {
      value: 'HZCB',
      text: '杭州银行',
    },
    {
      value: 'NJCB',
      text: '南京银行',
    },
    {
      value: 'NBBANK',
      text: '宁波银行',
    },
    {
      value: 'HSBANK',
      text: '徽商银行',
    },
    {
      value: 'CSCB',
      text: '长沙银行',
    },
    {
      value: 'CDCB',
      text: '成都银行',
    },
    {
      value: 'CQBANK',
      text: '重庆银行',
    },
    {
      value: 'DLB',
      text: '大连银行',
    },
    {
      value: 'NCB',
      text: '南昌银行',
    },
    {
      value: 'FJHXBC',
      text: '福建海峡银行',
    },
    {
      value: 'HKB',
      text: '汉口银行',
    },
    {
      value: 'WZCB',
      text: '温州银行',
    },
    {
      value: 'QDCCB',
      text: '青岛银行',
    },
    {
      value: 'TZCB',
      text: '台州银行',
    },
    {
      value: 'JXBANK',
      text: '嘉兴银行',
    },
    {
      value: 'CSRCB',
      text: '常熟农村商业银行',
    },
    {
      value: 'NHB',
      text: '南海农村信用联社',
    },
    {
      value: 'CZRCB',
      text: '常州农村信用联社',
    },
    {
      value: 'H3CB',
      text: '内蒙古银行',
    },
    {
      value: 'SXCB',
      text: '绍兴银行',
    },
    {
      value: 'SDEB',
      text: '顺德农商银行',
    },
    {
      value: 'WJRCB',
      text: '吴江农商银行',
    },
    {
      value: 'ZBCB',
      text: '齐商银行',
    },
    {
      value: 'GYCB',
      text: '贵阳市商业银行',
    },
    {
      value: 'ZYCBANK',
      text: '遵义市商业银行',
    },
    {
      value: 'HZCCB',
      text: '湖州市商业银行',
    },
    {
      value: 'DAQINGB',
      text: '龙江银行',
    },
    {
      value: 'JINCHB',
      text: '晋城银行JCBANK',
    },
    {
      value: 'ZJTLCB',
      text: '浙江泰隆商业银行',
    },
    {
      value: 'GDRCC',
      text: '广东省农村信用社联合社',
    },
    {
      value: 'DRCBCL',
      text: '东莞农村商业银行',
    },
    {
      value: 'MTBANK',
      text: '浙江民泰商业银行',
    },
    {
      value: 'GCB',
      text: '广州银行',
    },
    {
      value: 'LYCB',
      text: '辽阳市商业银行',
    },
    {
      value: 'JSRCU',
      text: '江苏省农村信用联合社',
    },
    {
      value: 'LANGFB',
      text: '廊坊银行',
    },
    {
      value: 'CZCB',
      text: '浙江稠州商业银行',
    },
    {
      value: 'DYCB',
      text: '德阳商业银行',
    },
    {
      value: 'JZBANK',
      text: '晋中市商业银行',
    },
    {
      value: 'BOSZ',
      text: '苏州银行',
    },
    {
      value: 'GLBANK',
      text: '桂林银行',
    },
    {
      value: 'URMQCCB',
      text: '乌鲁木齐市商业银行',
    },
    {
      value: 'CDRCB',
      text: '成都农商银行',
    },
    {
      value: 'ZRCBANK',
      text: '张家港农村商业银行',
    },
    {
      value: 'BOD',
      text: '东莞银行',
    },
    {
      value: 'LSBANK',
      text: '莱商银行',
    },
    {
      value: 'BJRCB',
      text: '北京农村商业银行',
    },
    {
      value: 'TRCB',
      text: '天津农商银行',
    },
    {
      value: 'SRBANK',
      text: '上饶银行',
    },
    {
      value: 'FDB',
      text: '富滇银行',
    },
    {
      value: 'CRCBANK',
      text: '重庆农村商业银行',
    },
    {
      value: 'ASCB',
      text: '鞍山银行',
    },
    {
      value: 'NXBANK',
      text: '宁夏银行',
    },
    {
      value: 'BHB',
      text: '河北银行',
    },
    {
      value: 'HRXJB',
      text: '华融湘江银行',
    },
    {
      value: 'ZGCCB',
      text: '自贡市商业银行',
    },
    {
      value: 'YNRCC',
      text: '云南省农村信用社',
    },
    {
      value: 'JLBANK',
      text: '吉林银行',
    },
    {
      value: 'DYCCB',
      text: '东营市商业银行',
    },
    {
      value: 'KLB',
      text: '昆仑银行',
    },
    {
      value: 'ORBANK',
      text: '鄂尔多斯银行',
    },
    {
      value: 'XTB',
      text: '邢台银行',
    },
    {
      value: 'JSB',
      text: '晋商银行',
    },
    {
      value: 'TCCB',
      text: '天津银行',
    },
    {
      value: 'BOYK',
      text: '营口银行',
    },
    {
      value: 'JLRCU',
      text: '吉林农信',
    },
    {
      value: 'SDRCU',
      text: '山东农信',
    },
    {
      value: 'XABANK',
      text: '西安银行',
    },
    {
      value: 'HBRCU',
      text: '河北省农村信用社',
    },
    {
      value: 'NXRCU',
      text: '宁夏黄河农村商业银行',
    },
    {
      value: 'GZRCU',
      text: '贵州省农村信用社',
    },
    {
      value: 'FXCB',
      text: '阜新银行',
    },
    {
      value: 'HBHSBANK',
      text: '湖北银行黄石分行',
    },
    {
      value: 'ZJNX',
      text: '浙江省农村信用社联合社',
    },
    {
      value: 'XXBANK',
      text: '新乡银行',
    },
    {
      value: 'HBYCBANK',
      text: '湖北银行宜昌分行',
    },
    {
      value: 'LSCCB',
      text: '乐山市商业银行',
    },
    {
      value: 'TCRCB',
      text: '江苏太仓农村商业银行',
    },
    {
      value: 'BZMD',
      text: '驻马店银行',
    },
    {
      value: 'GZB',
      text: '赣州银行',
    },
    {
      value: 'WRCB',
      text: '无锡农村商业银行',
    },
    {
      value: 'BGB',
      text: '广西北部湾银行',
    },
    {
      value: 'GRCB',
      text: '广州农商银行',
    },
    {
      value: 'JRCB',
      text: '江苏江阴农村商业银行',
    },
    {
      value: 'BOP',
      text: '平顶山银行',
    },
    {
      value: 'TACCB',
      text: '泰安市商业银行',
    },
    {
      value: 'CGNB',
      text: '南充市商业银行',
    },
    {
      value: 'CCQTGB',
      text: '重庆三峡银行',
    },
    {
      value: 'XLBANK',
      text: '中山小榄村镇银行',
    },
    {
      value: 'HDBANK',
      text: '邯郸银行',
    },
    {
      value: 'KORLABANK',
      text: '库尔勒市商业银行',
    },
    {
      value: 'BOJZ',
      text: '锦州银行',
    },
    {
      value: 'QLBANK',
      text: '齐鲁银行',
    },
    {
      value: 'BOQH',
      text: '青海银行',
    },
    {
      value: 'YQCCB',
      text: '阳泉银行',
    },
    {
      value: 'SJBANK',
      text: '盛京银行',
    },
    {
      value: 'FSCB',
      text: '抚顺银行',
    },
    {
      value: 'ZZBANK',
      text: '郑州银行',
    },
    {
      value: 'SRCB',
      text: '深圳农村商业银行',
    },
    {
      value: 'BANKWF',
      text: '潍坊银行',
    },
    {
      value: 'JJBANK',
      text: '九江银行',
    },
    {
      value: 'JXRCU',
      text: '江西省农村信用',
    },
    {
      value: 'HNRCU',
      text: '河南省农村信用',
    },
    {
      value: 'GSRCU',
      text: '甘肃省农村信用',
    },
    {
      value: 'SCRCU',
      text: '四川省农村信用',
    },
    {
      value: 'GXRCU',
      text: '广西省农村信用',
    },
    {
      value: 'SXRCCU',
      text: '陕西信合',
    },
    {
      value: 'WHRCB',
      text: '武汉农村商业银行',
    },
    {
      value: 'YBCCB',
      text: '宜宾市商业银行',
    },
    {
      value: 'KSRB',
      text: '昆山农村商业银行',
    },
    {
      value: 'SZSBK',
      text: '石嘴山银行',
    },
    {
      value: 'HSBK',
      text: '衡水银行',
    },
    {
      value: 'XYBANK',
      text: '信阳银行',
    },
    {
      value: 'NBYZ',
      text: '鄞州银行',
    },
    {
      value: 'ZJKCCB',
      text: '张家口市商业银行',
    },
    {
      value: 'XCYH',
      text: '许昌银行',
    },
    {
      value: 'JNBANK',
      text: '济宁银行',
    },
    {
      value: 'CBKF',
      text: '开封市商业银行',
    },
    {
      value: 'WHCCB',
      text: '威海市商业银行',
    },
    {
      value: 'HBC',
      text: '湖北银行',
    },
    {
      value: 'BOCD',
      text: '承德银行',
    },
    {
      value: 'BODD',
      text: '丹东银行',
    },
    {
      value: 'JHBANK',
      text: '金华银行',
    },
    {
      value: 'BOCY',
      text: '朝阳银行',
    },
    {
      value: 'LSBC',
      text: '临商银行',
    },
    {
      value: 'BSB',
      text: '包商银行',
    },
    {
      value: 'LZYH',
      text: '兰州银行',
    },
    {
      value: 'BOZK',
      text: '周口银行',
    },
    {
      value: 'DZBANK',
      text: '德州银行',
    },
    {
      value: 'SCCB',
      text: '三门峡银行',
    },
    {
      value: 'AYCB',
      text: '安阳银行',
    },
    {
      value: 'ARCU',
      text: '安徽省农村信用社',
    },
    {
      value: 'HURCB',
      text: '湖北省农村信用社',
    },
    {
      value: 'HNRCC',
      text: '湖南省农村信用社',
    },
    {
      value: 'NYNB',
      text: '广东南粤银行',
    },
    {
      value: 'LYBANK',
      text: '洛阳银行',
    },
    {
      value: 'NHQS',
      text: '农信银清算中心',
    },
    {
      value: 'CBBQS',
      text: '城市商业银行资金清算中心',
    },
  ].map((v, i) => ({
    label: v.text,
    value: v.value,
  }));
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [payMethod, setPayMethod] = useState("")
  const [bankName, setBankName] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const onClose2 = () => {
    setVisible(false);
  };
  const handleSelectChange= (value) => {
    console.log('value', value)
    const bankName = bankList.filter(item => item.value === value)[0].label;
    setSelectedOption(value);
    setBankName(bankName);
    setTimeout(() => {
      setVisible2(false);
    }, 500);
  }
  return (
    <>
      <View style={{ backgroundColor: '#D8D8D8', height: '100%' }}>
        <View style={{ height: 150, backgroundColor: '#fff' }}>
          <Text style={{ fontSize: 20, fontWeight: '500', paddingLeft: 20, paddingTop: 10 }}>付款方式</Text>
          <WhiteSpace size="lg" />
          <WingBlank size="lg">
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                setVisible(true);
              }}
            >
              <Flex justify="between" align="center" s style={{ paddingLeft: 20, paddingRight: 20, borderWidth: 1, height: 60, borderColor: '#E9EDF0' }}>
                <Text style={{ fontSize: 15, fontWeight: '300' }}>{payMethod === '' ? '选择付款方式' : payMethod}</Text>
                <Icon name="caret-down" size={20} />
              </Flex>
            </TouchableOpacity>
          </WingBlank>
        </View>
        <WhiteSpace size="lg" />
        {payMethod === '微信' && (
          <View style={{ height: 150, backgroundColor: '#fff' }}>
            <InputItem defaultValue="" clear placeholder="名字">
              名字
            </InputItem>
            <WingBlank size="lg">
              <Flex justify="start" align="center" style={{ height: 100 }}>
                <Text style={{ fontSize: 15 }}>收款码</Text>
                <Flex justify="center" align="center" style={{ width: 80, height: 80, borderWidth: 1, marginLeft: 20, borderStyle: 'dashed', borderColor: '#BBBBBB' }}>
                  <Text style={{ fontSize: 50, color: '#BBBBBB' }}>+</Text>
                </Flex>
              </Flex>
            </WingBlank>
          </View>
        )}
        {payMethod === '支付宝' && (
          <View style={{ height: 190, backgroundColor: '#fff' }}>
            <InputItem defaultValue="" clear placeholder="名字">
              名字
            </InputItem>
            <InputItem defaultValue="" clear placeholder="支付宝账号">
              账号
            </InputItem>
            <WingBlank size="lg">
              <Flex justify="start" align="center" style={{ height: 100 }}>
                <Text style={{ fontSize: 15 }}>收款码</Text>
                <Flex justify="center" align="center" style={{ width: 80, height: 80, borderWidth: 1, marginLeft: 20, borderStyle: 'dashed', borderColor: '#BBBBBB' }}>
                  <Text style={{ fontSize: 50, color: '#BBBBBB' }}>+</Text>
                </Flex>
              </Flex>
            </WingBlank>
          </View>
        )}
        {payMethod === '银联' && (
          <View style={{ height: 190, backgroundColor: '#fff' }}>
            <InputItem defaultValue="" clear placeholder="卡号">
              卡号
            </InputItem>
            <InputItem defaultValue="" clear placeholder="姓名">
              姓名
            </InputItem>
            <WingBlank size="lg">
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  setVisible2(true);
                }}
              >
                <Flex justify="between" align="center" s style={{ paddingLeft: 20, paddingRight: 20, height: 60 }}>
                  <Text style={{ fontSize: 15, fontWeight: '300' }}>{bankName === '' ? '请选择' : bankName}</Text>
                  <Icon name="caret-down" size={20} />
                </Flex>
              </TouchableOpacity>
            </WingBlank>
          </View>
        )}
      </View>
      <Modal popup visible={visible} animationType="slide-up" onClose={onClose2} maskClosable={true}>
        <View style={{ paddingVertical: 20, paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: '#F4F4F4' }}>
          <Text style={{ textAlign: 'center', fontSize: 17 }}>选择付款方式</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            setPayMethod('微信');
            setVisible(false);
          }}
        >
          <Flex style={{ paddingVertical: 10, paddingHorizontal: 20, marginBottom: 30 }}>
            <Icon name="wechat" style={{ marginRight: 10 }} size={30} color="#50AF32" />
            <Text style={{ fontWeight: '500', fontSize: 16 }}>微信</Text>
          </Flex>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            setPayMethod('支付宝');
            setVisible(false);
          }}
        >
          <Flex style={{ paddingHorizontal: 20, marginBottom: 30 }}>
            <Icon name="alipay-circle" style={{ marginRight: 10 }} size={30} color="#4086F5" />
            <Text style={{ fontWeight: '500', fontSize: 16 }}>支付宝</Text>
          </Flex>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            setPayMethod('银联');
            setVisible(false);
          }}
        >
          <View style={{ paddingHorizontal: 20, marginBottom: 30 }}>
            <Text style={{ fontWeight: '500', fontSize: 16 }}>银行</Text>
          </View>
        </TouchableOpacity>
      </Modal>
      <Modal popup visible={visible2} animationType="slide-up" onClose={onClose2} maskClosable={true}>
        <View style={{ paddingVertical: 20, paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: '#F4F4F4' }}>
          <Text style={{ textAlign: 'center', fontSize: 17 }}>请选择</Text>
        </View>
        <ScrollView style={{ height: 450 }}>
          <RadioGroup
            radioGroupList={bankList}
            initialValue={selectedOption}
            onChange={handleSelectChange}
            containerStyle={{ display: 'flex', flexDirection: 'column' }}
            buttonContainerStyle={{ borderWidth: 0, width: '100%' }}
            buttonContainerActiveStyle={{ borderWidth: 0, width: '100%' }}
            buttonContainerInactiveStyle={{ borderWidth: 0, width: '100%' }}
            buttonTextActiveStyle={{ fontSize: 14 }}
            buttonTextInactiveStyle={{ fontSize: 14 }}
            buttonTextStyle={{ fontSize: 14 }}
          />
        </ScrollView>
      </Modal>
    </>
  );
};

PayMethodsComponent.title = '收付款信息';
export default PayMethodsComponent;
