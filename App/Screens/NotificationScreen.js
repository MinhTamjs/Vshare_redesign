import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

const NotificationScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Hoạt động</Text>
      <SegmentedControl
        values={['Đang diễn ra', 'Lịch sử']}
        selectedIndex={selectedIndex}
        onChange={event => {
          setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
        }}
        style={styles.segmentedControl}
      />

      <View style={styles.content}>
        <Image
          source={require('../../assets/images/cars/Red-Tesla-Model-S-PNG.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Bạn chưa thuê xe?</Text>
        <Text style={styles.description}>
          Hãy thuê xe ngay để hưởng những ưu đãi hấp dẫn
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Thuê xe ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  segmentedControl: {
    marginBottom: 20,
  },
  content: {
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 170,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3B6645',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NotificationScreen;
