import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Payment = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Pressable style={styles.header} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="white" />
        <Text style={styles.headerText}>Add payment</Text>
      </Pressable>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable style={styles.item}>
          <Fontisto name="credit-card" size={24} color="#ddd" />
          <Text style={styles.itemText}>Credit or Debit Card</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  headerText: {
    color: 'white',
    marginLeft: 20,
    fontSize: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    marginTop: 80,
  },
  itemText: {
    marginLeft: 20,
    fontSize: 16,
  },
});

export default Payment;
