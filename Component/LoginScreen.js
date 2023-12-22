// Screen1Component.js
import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

function LoginScreen({navigation}) {
  const [name, SetName] = useState('');
  const [pass, SetPass] = useState(null);
  return (
    <View>
      <TextInput
        inputMode="email-address"
        placeholder="User Name"
        value={name}
        onChangeText={text => SetName(text)}
      />
      <TextInput
        placeholder="Password"
        value={pass}
        onChangeText={text => SetPass(text)}
        keyboardType="numeric"
        secureTextEntry
      />
      <Button
        title=" LogIn"
        onPress={() => navigation.navigate('SuccessScreen')}
      />
    </View>
  );
}

export default LoginScreen;

// Screen1Component.js;
