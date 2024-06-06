import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Switch,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AddNewCardScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveCard, setSaveCard] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thêm thẻ mới</Text>

      <View style={styles.inputContainer}>
        <Image
          source={require('./../../assets/images/icons/car_icon.png')}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          placeholderTextColor="#B0B0B0"
          value={cardNumber}
          onChangeText={setCardNumber}
        />
      </View>

      <View style={styles.inputRow}>
        <View style={styles.inputContainerHalf}>
          <TextInput
            style={styles.input}
            placeholder="MM/YY"
            placeholderTextColor="#B0B0B0"
            value={expiryDate}
            onChangeText={setExpiryDate}
          />
        </View>
        <View style={styles.inputContainerHalf}>
          <TextInput
            style={styles.input}
            placeholder="CVV"
            placeholderTextColor="#B0B0B0"
            value={cvv}
            onChangeText={setCvv}
          />
        </View>
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Lưu thông tin thẻ</Text>
        <Switch
          value={saveCard}
          onValueChange={setSaveCard}
          trackColor={{false: '#767577', true: '#3BB475'}}
          thumbColor={saveCard ? '#FFFFFF' : '#f4f3f4'}
        />
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Thêm thẻ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F7F5',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inputContainerHalf: {
    flex: 1,
    backgroundColor: '#F3F7F5',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  switchText: {
    fontSize: 16,
  },
  addButton: {
    width: '100%',
    borderRadius: 15,
    marginVertical: 10,
    overflow: 'hidden',
    backgroundColor: '#61837A',
    paddingVertical: 15,
    alignItems: 'center',
  },
  gradientButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddNewCardScreen;
