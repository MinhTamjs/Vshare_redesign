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


const UserScreen = () => {
  const navigation = useNavigation();
  return (
      <View classname="flex-1">
        <View>
          <StatusBar />
          <View style={{width: '100'}}>
            <Image
              source={require('./../../assets/images/banners/Banner_2.png')}
              style={styles.cover}
            />
          </View>
          <View style={styles.profileContainer}>
            <Image
              source={require("../../assets/images/cars/36-365503_bmw-m4-gts-png-transparent-png.png")}
              style={styles.profile}
            />
            <Text style={styles.name}> Minh Tam </Text>
          </View>
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
    height: 300,
    width: '100%',
    resizeMode: 'cover',
  },
  profileContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 250,
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
  },
});
