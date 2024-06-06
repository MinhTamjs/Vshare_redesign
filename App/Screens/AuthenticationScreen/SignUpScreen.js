import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/cars/Red-Tesla-Model-S-PNG.png')}
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>Đăng ký tài khoản Vshare</Text>
      <Text style={styles.instructionText}>
        Bắt đầu bằng cách đăng ký tài khoản cho bạn
      </Text>
      <View style={styles.inputContainer}>
        <Icon name="user" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Nhập Tên"
          placeholderTextColor="#aaa"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Nhập email"
          placeholderTextColor="#aaa"
        />
      </View>
      <View style={styles.inputContainer}>
        <MaterialIcon name="lock-outline" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          placeholderTextColor="#aaa"
          secureTextEntry
        />
      </View>
      <View style={styles.inputContainer}>
        <MaterialIcon name="lock-outline" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Nhập lại mật khẩu"
          placeholderTextColor="#aaa"
          secureTextEntry
        />
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.loginButtonText}>Đăng ký</Text>
      </TouchableOpacity>

      <Text
        style={styles.signUpText}
        onPress={() => navigation.navigate('Login')}>
        Đã có tài khoản? <Text style={styles.signUpLink}>Đăng nhập</Text>
      </Text>

      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'green'}} />
        <View>
          <Text
            style={{
              width: 50,
              textAlign: 'center',
              color: '#61837A',
              fontSize: 17,
            }}>
            Hoặc
          </Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'green'}} />
      </View>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={24} color="#DB4437" />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="facebook" size={24} color="#4267B2" />
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#005640',
  },
  instructionText: {
    fontSize: 16,
    color: '#61837A',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginVertical: 10,
    color: '#61837A',
  },
  loginButton: {
    width: '100%',
    borderRadius: 15,
    marginVertical: 10,
    overflow: 'hidden',
    backgroundColor: '#61837A',
    paddingVertical: 15,
    alignItems: 'center',
  },
  gradient: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  signUpText: {
    fontSize: 16,
    marginVertical: 10,
    color: '#61837A',
  },
  signUpLink: {
    color: '#237962',
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    color: '#61837A',
    marginVertical: 10,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 30,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F9F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  socialButtonText: {
    color: 'black',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default SignUpScreen;
