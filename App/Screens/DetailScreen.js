import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailScreen = ({route, navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <LinearGradient colors={['#C6F7A2', '#889B91']} style={styles.header}>
          <View style={styles.headerIcons}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('./../../assets/images/icons/chevron.png')}
                style={{height: 40, width: 40}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Favorite pressed')}>
              <Image
                source={require('./../../assets/images/icons/like.png')}
                style={{height: 40, width: 40}}
              />
            </TouchableOpacity>
          </View>
          <Image
            source={require('../../assets/images/cars/Red-Tesla-Model-S-PNG.png')}
            style={styles.image}
          />
          <Text style={styles.title}>Bugatti Vision</Text>
        </LinearGradient>

        <View style={styles.detailsContainer}>
          <Text style={styles.sectionTitle}>Các tính năng</Text>
          <View style={styles.featuresContainer}>
            <View style={styles.featureBox}>
              <Icon name="speed" size={24} color="#1A804A" />
              <Text style={styles.featureTitle}>Điều khiển</Text>
              <Text style={styles.featureSubtitle}>Tự động</Text>
            </View>
            <View style={styles.featureBox}>
              <Icon name="event-seat" size={24} color="#1A804A" />
              <Text style={styles.featureTitle}>Số chỗ ngồi</Text>
              <Text style={styles.featureSubtitle}>4 chỗ</Text>
            </View>
            <View style={styles.featureBox}>
              <Icon name="ac-unit" size={24} color="#1A804A" />
              <Text style={styles.featureTitle}>Điều hòa</Text>
              <Text style={styles.featureSubtitle}>Tùy chỉnh nhiệt độ</Text>
            </View>
            <View style={styles.featureBox}>
              <Icon name="local-gas-station" size={24} color="#1A804A" />
              <Text style={styles.featureTitle}>Nhiên liệu</Text>
              <Text style={styles.featureSubtitle}>Petrol</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <Text style={styles.priceText}>Tổng giá</Text>
        <Text style={styles.priceAmount}>200000/Ngày</Text>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Đặt ngay</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 20,
    position: 'relative',
  },
  headerIcons: {
    top: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  image: {
    width: 600,
    height: 350,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureBox: {
    width: '45%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  featureSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  priceText: {
    fontSize: 20,
    color: '#1A804A',
  },
  priceAmount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: "#1A804A",
  },
  bookButton: {
    backgroundColor: '#59E29A',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  bookButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default DetailScreen;
