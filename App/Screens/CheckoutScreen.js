import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const CheckoutScreen = () => {
  const [selectedOption, setSelectedOption] = useState('card');
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Thanh toán</Text>

      <View style={styles.optionContainer}>
        <Text style={styles.optionTitle}>Thẻ ngân hàng/Credit Card</Text>
        <TouchableOpacity
          style={[
            styles.card,
            selectedOption === 'card1' && styles.selectedCard,
          ]}
          onPress={() => setSelectedOption('card1')}>
          <LinearGradient
            colors={['#6DD5FA', '#2C25BF']}
            style={styles.gradientCard}>
            <Image
              source={require('./../../assets/images/logo/visa_logo.png')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>**** **** **** 2847</Text>
            <Text style={styles.cardHolder}>Tâm Minh</Text>
            <Text style={styles.cardExpiry}>04/30</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.card,
            selectedOption === 'card2' && styles.selectedCard,
          ]}
          onPress={() => setSelectedOption('card2')}>
          <LinearGradient
            colors={['#6DD5FA', '#2C25BF']}
            style={styles.gradientCard}>
            <Image
              source={require('./../../assets/images/logo/visa_logo.png')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>**** **** **** 1234</Text>
            <Text style={styles.cardHolder}>Minh Tâm</Text>
            <Text style={styles.cardExpiry}>08/25</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addCardButton} onPress={() => navigation.navigate('Add_New_Card')}>
          <Text style={styles.addCardText}>+ Thêm thẻ mới</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.cashOption}
        onPress={() => setSelectedOption('cash')}>
        <Text style={styles.optionTitle}>Thanh toán khi nhận xe</Text>
        <View
          style={
            selectedOption === 'cash' ? styles.selectedCircle : styles.circle
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cashOption}
        onPress={() => setSelectedOption('momo')}>
        <Text style={styles.optionTitle}>Thanh toán bằng momo</Text>
        <View
          style={
            selectedOption === 'momo' ? styles.selectedCircle : styles.circle
          }
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>Thanh toán ngay</Text>
      </TouchableOpacity>
      <View style={styles.spacer}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionContainer: {
    marginBottom: 20,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    borderRadius: 15,
    marginBottom: 15,
    width: 370,
  },
  gradientCard: {
    padding: 20,
    borderRadius: 5,
  },
  selectedCard: {
    borderColor: '#25BFBA',
    borderWidth: 5,
    borderRadius: 10,
  },
  cardImage: {
    width: 100,
    height: 50,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  cardHolder: {
    fontSize: 16,
    color: '#FFF',
  },
  cardExpiry: {
    fontSize: 14,
    color: '#FFF',
  },
  addCardButton: {
    alignItems: 'center',
    padding: 10,
  },
  addCardText: {
    fontSize: 16,
    color: '#3BB475',
  },
  cashOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F3F7F5',
    borderRadius: 10,
    marginTop: 20,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#3BB475',
  },
  selectedCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#3BB475',
  },
  payButton: {
    backgroundColor: '#3BB475',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  payButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  spacer: {
    height: 100,
  },
});

export default CheckoutScreen;
