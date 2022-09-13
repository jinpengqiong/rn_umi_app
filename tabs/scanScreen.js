import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ActionSheetIOS } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ScanScreenPage() {
  let openImagePickerAsync = async () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['相册', '拍照', '关闭'],
        cancelButtonIndex: 2,
      },
      async (buttonIndex) => {
        try {
          if (buttonIndex === 0) {
            //相册
            uploadImage(ImagePicker.launchImageLibraryAsync);
          } else if (buttonIndex === 1) {
            //拍照
            uploadImage(ImagePicker.launchCameraAsync);
          }
        } catch (error) {
          console.log(error);
        }
      }
    );
  };
  const uploadImage = async (handle) => {
    const option = {
      allowsEditing: true,
      quality: 1,
      base64: true,
    }
    //result为获取的图片信息
    let result = await handle(option)
    if (!result.cancelled) {
        //注：因为我在项目中时使用base64上传图片的，所以此处没有组装数据，如果你是使用multipart/form-data
        //    请参考下面文件的上传
      try {
        //异步操作
        console.log('异步操作', result);
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
      <Text style={styles.instructions}>To share a photo from your phone with a friend, just press the button below!</Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});