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

const WalletScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Pressable style={styles.header} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="white" />
        <Text style={styles.headerText}>Wallet</Text>
      </Pressable>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text>Rumper Cash</Text>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>NGN 0</Text>
            <AntDesign name="right" size={30} />
          </View>

          <Pressable style={styles.button}>
            <Entypo name="plus" color="white" size={26} />
            <Text style={styles.buttonText}>ADD FUNDS</Text>
          </Pressable>
        </View>

        <View style={styles.payment}>
          <View style={styles.cash}>
            <MaterialCommunityIcons name="cash" color="green" size={34} />
            <Text style={styles.cashText}>Cash</Text>
          </View>
          <Pressable onPress={() => navigation.navigate('Payment')}>
            <Text style={styles.paymentMethod}>Add Payment Method</Text>
          </Pressable>
        </View>

        <View style={styles.profiles}>
          <Text style={styles.subTitle}>Ride Profiles</Text>
          <Pressable
            style={styles.profileItem}
            onPress={() => navigation.navigate('Profile')}>
            <View style={styles.iconContainer}>
              <FontAwesome name="user" size={24} color="white" />
            </View>
            <Text style={styles.profileText}>Personal</Text>
          </Pressable>

          <Pressable
            style={styles.profileItem}
            onPress={() => navigation.navigate('Business')}>
            <View style={{...styles.iconContainer, backgroundColor: '#ddd'}}>
              <MaterialCommunityIcons
                name="briefcase-outline"
                size={24}
                color="white"
              />
            </View>
            <View>
              <Text style={styles.profileTextOne}>
                Start using Rumper for business
              </Text>
              <Text style={styles.profileTextTwo}>
                Turn on business travel features
              </Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.promotion}>
          <Text style={styles.subTitle}>Promotions</Text>
          <Pressable onPress={() => navigation.navigate('AddPromo')}>
            <Text style={{...styles.promotionText, color: '#6CB4EE'}}>
              Add Promo Code
            </Text>
          </Pressable>
        </View>

        <View style={styles.voucher}>
          <Text style={styles.subTitle}>Vouchers</Text>
          <View style={styles.voucherItem}>
            <FontAwesome name="flickr" size={24} color="black" />
            <Text style={styles.voucherItemText}>Vouchers</Text>
          </View>
          <Pressable onPress={() => navigation.navigate('AddVoucher')}>
            <Text style={styles.paymentMethod}>Add voucher code</Text>
          </Pressable>
        </View>
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
  card: {
    margin: 20,
    padding: 20,

    width: SCREEN_WIDTH - 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  amount: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 25,
    width: '55%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 55,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  payment: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cash: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cashText: {
    fontSize: 16,
    marginLeft: 15,
  },

  paymentMethod: {
    color: '#6CB4EE',
  },
  profiles: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileItem: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileText: {
    fontSize: 14,
  },
  profileTextOne: {
    color: '#6CB4EE',
    fontSize: 14,
  },
  profileTextTwo: {
    color: 'grey',
    fontSize: 14,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  subTitle: {
    color: 'grey',
    fontWeight: 'bold',
  },
  promotion: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  promotionText: {
    marginVertical: 15,
  },
  voucher: {
    margin: 20,
    marginBottom: 150,
  },
  voucherItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },
  voucherItemText: {
    marginLeft: 20,
  },
});

export default WalletScreen;
