import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UserScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar />
      <View>
        <Image
          source={require('./../../assets/images/banners/Banner_2.png')}
          style={styles.cover}
        />
        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/images/cars/36-365503_bmw-m4-gts-png-transparent-png.png')}
            style={styles.profile}
          />
          <Text style={styles.name}>Minh Tam</Text>
        </View>
      </View>
      <View style={styles.featuresContainer}>
        <View style={styles.featureBox}>
          <Icon name="credit-card" size={24} color="#1A804A" />
          <Text style={styles.featureText}>Giấy phép</Text>
        </View>
        <View style={styles.featureBox}>
          <Icon name="account-box" size={24} color="#1A804A" />
          <Text style={styles.featureText}>Hỗ trợ</Text>
        </View>
        <View style={styles.featureBox}>
          <Icon name="description" size={24} color="#1A804A" />
          <Text style={styles.featureText}>Điều khoản</Text>
        </View>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Profile')}>
          <Icon name="person" size={24} color="#1A804A" />
          <Text style={styles.menuText}>Thông tin</Text>
          <Icon name="chevron-right" size={24} color="#1A804A" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Bookings')}>
          <Icon name="calendar-today" size={24} color="#1A804A" />
          <Text style={styles.menuText}>Hướng dẫn</Text>
          <Icon name="chevron-right" size={24} color="#1A804A" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Settings')}>
          <Icon name="settings" size={24} color="#1A804A" />
          <Text style={styles.menuText}>Cài đặt</Text>
          <Icon name="chevron-right" size={24} color="#1A804A" />
        </TouchableOpacity>
      </View>

      <View style={styles.logoutContainer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => console.log('Logout pressed')}>
          <Icon name="logout" size={24} color="#1A804A" />
          <Text style={styles.logoutText}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cover: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
  profileContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  profile: {
    height: 155,
    width: 155,
    borderRadius: 999,
    resizeMode: 'cover',
    marginTop: -90,
    borderColor: 'white',
    borderWidth: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
    color: '#1A804A',
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  featureBox: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    width: '30%',
  },
  featureText: {
    marginTop: 5,
    fontSize: 14,
    color: '#1A804A',
  },
  menuContainer: {
    marginVertical: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#1A804A',
    marginLeft: 10,
  },
  logoutContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
  },
  logoutText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#1A804A',
  },
});
