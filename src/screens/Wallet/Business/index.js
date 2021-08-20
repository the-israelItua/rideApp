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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ImageBg from '../../../assets/images/5283.jpg';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const Business = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.header} onPress={() => navigation.goBack()}>
        <AntDesign name="close" size={24} />
      </Pressable>
      <ScrollView>
        <Text style={styles.headerText}>Simplify work travel</Text>
        <Image source={ImageBg} style={styles.image} />

        <Pressable
          onPress={() => navigation.navigate('BusinessRide')}
          style={styles.businessItem}>
          <Icon name="user-alt" size={24} />
          <View style={styles.businessDetails}>
            <View style={styles.businessDetailComp}>
              <Text style={styles.subTitle}>Ride for business</Text>
              <Text style={styles.businessText}>
                Get receipts emailed to a work inbox, keep work trips separate
                and more.
              </Text>
            </View>
            <Icon
              name="chevron-right"
              size={18}
              color="grey"
              style={styles.chevron}
            />
          </View>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('BusinessTeam')}
          style={styles.businessItem}>
          <Icon name="user-friends" size={24} />
          <View style={styles.businessDetails}>
            <View style={styles.businessDetailComp}>
              <Text style={styles.subTitle}>Create a team account</Text>
              <Text style={styles.businessText}>
                Set rules for travel expensing and invite others to charge
                eligible rides.
              </Text>
            </View>
            <Icon
              name="chevron-right"
              size={18}
              color="grey"
              style={styles.chevron}
            />
          </View>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('BusinessAccount')}
          style={styles.businessItem}>
          <Icon name="user-plus" size={24} />
          <View style={styles.businessDetails}>
            <View style={styles.businessDetailComp}>
              <Text style={styles.subTitle}>Join an existing account</Text>
              <Text style={styles.businessText}>
                Link your account to a business and start expensing eligible
                rides.
              </Text>
            </View>
            <Icon
              name="chevron-right"
              size={18}
              color="grey"
              style={styles.chevron}
            />
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  image: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 3,
    resizeMode: 'cover',
  },
  businessItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
  },
  businessDetails: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingRight: 20,
  },
  businessDetailComp: {
    width: '80%',
  },
  businessText: {
    color: 'grey',
    lineHeight: 22,
  },
  subTitle: {
    fontWeight: 'bold',
  },
});

export default Business;
