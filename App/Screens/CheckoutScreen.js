import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

const CheckoutScreen = () => {
  const [selectedOption, setSelectedOption] = useState('card');

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
          <Image
            source={require('./../../assets/images/banners/Banner_2.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>**** **** **** 2847</Text>
          <Text style={styles.cardHolder}>Tâm Minh</Text>
          <Text style={styles.cardExpiry}>04/30</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.card,
            selectedOption === 'card2' && styles.selectedCard,
          ]}
          onPress={() => setSelectedOption('card2')}>
          <Image
            source={require('./../../assets/images/banners/Banner_2.png')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>**** **** **** 1234</Text>
          <Text style={styles.cardHolder}>Minh Tâm</Text>
          <Text style={styles.cardExpiry}>08/25</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addCardButton}>
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
    backgroundColor: '#F3F7F5',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selectedCard: {
    borderColor: '#3BB475',
  },
  cardImage: {
    width: 60,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardHolder: {
    fontSize: 16,
  },
  cardExpiry: {
    fontSize: 14,
    color: 'gray',
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
});

export default CheckoutScreen;
