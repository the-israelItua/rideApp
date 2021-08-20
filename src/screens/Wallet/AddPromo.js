import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const AddPromo = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable style={styles.header} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="white" />
        <Text style={styles.headerText}>Add Promo Code</Text>
      </Pressable>
      <ScrollView></ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
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
});

export default AddPromo;
