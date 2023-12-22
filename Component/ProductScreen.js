import {View, Text, Image, Button} from 'react-native';
import React from 'react';

const ProductScreen = ({navigation}) => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/18339881/pexels-photo-18339881/free-photo-of-lang-trong-nui.jpeg',
        }}
        style={{height: 300, width: 300}}
        title="Picture"
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ProductScreen;

// // Screen1.js
// import React from 'react';
// import {View, Text, Button} from 'react-native';

// function Screen3component({navigation}) {
//   return (
//     <View>
//       <Text>Screen 1</Text>
//       <Button title="Go to Screen 2" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// export default Screen3component;
