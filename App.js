import React from 'react';
import { Image, Text,TextInput,View } from 'react-native';

const App = () =>{
  return(
    <View>
      <View style={{width:80, height:80, backgroundColor:'#ccc'}}></View>
      <Text>Zulfi</Text>
      <Text>Andri</Text>
      <ComAndi/>
      <PhotoSaya/>
      <TextInput style={{borderWidth:1}}></TextInput>
    </View>
  );
}

const ComAndi = () => {
  return <Text>Component Andri</Text>;
}
const PhotoSaya = () => {
  return <Image source={{uri:'https://bumame.cloud.co.id/bumame_test/assets/media/logos/logo-web.png'}}
  style={{width:278, height:80}}></Image>
}
export default App;