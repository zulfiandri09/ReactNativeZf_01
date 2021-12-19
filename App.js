import React, {Component} from 'react';
import { Image, Text,TextInput,View, StyleSheet } from 'react-native';
import ImageBio from './Bio.jpg';

const App = () =>{
  return (
    <StylingReactNativeComponent />
  );
  
}

const StylingReactNativeComponent = () =>{
  return(
    <View>
      <Text style={Styles.text}>Styling Component</Text>
      <View 
        style={{
          width: 100,
          height:100,
          backgroundColor: '#0abde3',
          borderWidth: 3,
          borderColor:'#5f27cd',
          marginTop:20,
          marginLeft:20 
        }}>
      </View>
      <View style={{
            padding:12,
            backgroundColor:'#f2f2f2',
            width:212,
            borderRadius:8
        }}>
        <Image source={ImageBio} 
          style={{width:188, height:107, borderRadius:8}}>
        </Image>

        <Text style={{
          fontSize:18,
          fontWeight:'bold',
          marginTop:18
        }}>
        New Peringatan 2021</Text>

        <Text style={{fontSize:12, fontWeight:'bold', color:'#f2994a', marginTop:12}}>Rp. 25.000.000</Text>
        <Text style={{fontSize:12, color:'#000000', marginTop:12}}>Jakarta Barat</Text>
        <View style={{
            backgroundColor:'#6fcf97',
            // paddingTop:6,
            // paddingBottom:6,
            paddingVertical:6,
            borderRadius:25,
            marginTop:20
          }}>
          <Text style={{
              fontSize:14,
              fontWeight:'600',
              color:'white',
              textAlign:'center'
            }}>BELI</Text>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  text: {
    fontSize:40,
    fontWeight:'bold',
    color: '#10ac84',
    marginLeft:20,
    marginTop:40
  }
});

const SampleComponent = () => {
  return (
    <View>
      <View style={{width:80, height:80, backgroundColor:'#ccc'}}></View>
      <Text>Zulfi ok2</Text>
      <Text>Andri</Text>
      <ComAndi/>
      <PhotoSaya/>
      <TextInput style={{borderWidth:1}}></TextInput>
      <BoxGreen />
      <Profilzf />
    </View>
  );
};

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