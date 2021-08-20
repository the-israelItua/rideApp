import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const AddVoucher = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable style={styles.header} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="white" />
        <Text style={styles.headerText}>Add Voucher</Text>
      </Pressable>

      <View style={styles.inner}>
        <Text>Code</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter a voucher"
          autoFocus
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate('EnterMobile')}>
          <Text style={styles.btnText}>Add</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: '15%',
    backgroundColor: 'black',
  },
  headerText: {
    color: 'white',
    marginLeft: 20,
    fontSize: 20,
  },
  inner: {
    marginLeft: 20,
    marginTop: 30,
  },
  input: {
    borderBottomWidth: 2,
    width: SCREEN_WIDTH - 40,
    paddingVertical: 10,
    fontSize: 18,
    paddingVertical: 15,
  },

  btn: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    backgroundColor: 'black',
    width: SCREEN_WIDTH - 40,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddVoucher;

// import React from 'react';
// import {
//   View,
//   KeyboardAvoidingView,
//   TextInput,
//   StyleSheet,
//   Text,
//   Platform,
//   TouchableWithoutFeedback,
//   Button,
//   Keyboard,
// } from 'react-native';

// const KeyboardAvoidingComponent = () => {
//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.container}>
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View style={styles.inner}>
//           <Text style={styles.header}>Header</Text>
//           <TextInput placeholder="Username" style={styles.textInput} />
//           <View style={styles.btnContainer}>
//             <Button title="Submit" onPress={() => null} />
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   inner: {
//     padding: 24,
//     flex: 1,
//     justifyContent: 'space-around',
//   },
//   header: {
//     fontSize: 36,
//     marginBottom: 48,
//   },
//   textInput: {
//     height: 40,
//     borderColor: '#000000',
//     borderBottomWidth: 1,
//     marginBottom: 36,
//   },
//   btnContainer: {
//     backgroundColor: 'white',
//     marginTop: 12,
//   },
// });

// export default KeyboardAvoidingComponent;
