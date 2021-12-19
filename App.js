import React, {Component} from 'react';
import { Image, Text,TextInput,View } from 'react-native';

const App = () =>{
  return(
    <View>
      <View style={{width:80, height:80, backgroundColor:'#ccc'}}></View>
      <Text>Zulfi ok</Text>
      <Text>Andri</Text>
      <ComAndi/>
      <PhotoSaya/>
      <TextInput style={{borderWidth:1}}></TextInput>
      <BoxGreen />
      <Profilzf />
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

class BoxGreen extends Component {
  render(){
    return <Text>ini Component dari Class</Text>
  }
}

class Profilzf extends Component {
  render(){
    return (
    <View>
      <Image source={{uri:'https://placeimg.com/100/100/people'}} 
      style={{width:100, height:100, borderWidth:50}}></Image>
      <Text style={{color:'blue', fontSize:24}}> Photo Profile</Text>
    </View>
    );
  }
}

export default App;