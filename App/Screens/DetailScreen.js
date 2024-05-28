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

const DetailScreen = ({route}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <LinearGradient colors={['#C6F7A2', '#0E561E']} style={styles.header}>
          <Image
            source={require('../../assets/images/cars/Red-Tesla-Model-S-PNG.png')}
            style={styles.image}
          />
          <Text style={styles.title}>Porche model X</Text>
          <Text style={styles.subtitle}>Porche model X</Text>
        </LinearGradient>

        <View style={styles.detailsContainer}>
          <Text style={styles.sectionTitle}>Thông tin chi tiết</Text>
          <View style={styles.specs}>
            <Icon name="speed" size={24} color="#333" />
            <Text style={styles.specText}>Loại xe: Auto</Text>
          </View>
          <View style={styles.specs}>
            <Icon name="local-gas-station" size={24} color="#333" />
            <Text style={styles.specText}>Nhiên liệu: 92</Text>
          </View>
          <View style={styles.specs}>
            <Icon name="event-seat" size={24} color="#333" />
            <Text style={styles.specText}>Chỗ ngồi: 5</Text>
          </View>

          <Text style={styles.sectionTitle}>Mô tả</Text>
          <Text style={styles.description}>Porche model X</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.rentButton}>
          <Text style={styles.rentButtonText}>Đặt xe</Text>
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
  },
  image: {
    width: 500,
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  specs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  specText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
    lineHeight: 24,
  },
  buttonContainer: {
    padding: 20,
  },
  rentButton: {
    backgroundColor: '#056938',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    elevation: 10,
  },
  rentButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 19,
  },
});

export default DetailScreen;
