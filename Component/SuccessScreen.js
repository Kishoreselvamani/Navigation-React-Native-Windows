// Screen2Component.js
import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

function SuccessScreen({navigation}) {
  return (
    <View style={Styles.container}>
      {/* <ImageBackground
        style={{justifyContent: 'center', flex: 1, height: 100, width: 100}}
        source={{
          uri: 'https://images.pexels.com/photos/18339881/pexels-photo-18339881/free-photo-of-lang-trong-nui.jpeg',
        }}
        resizeMode="cover"
      /> */}
      <View style={Styles.textPadding}>
        <Text style={Styles.innertext}>Successfully Login</Text>
      </View>
      <Button
        title="Next Page"
        onPress={() => navigation.push('ProductScreen')}
      />
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textPadding: {
    color: '#fff',
    backgroundColor: '#FFA679',
    padding: 20,
    textAlign: 'center',
  },
  innertext: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SuccessScreen;
