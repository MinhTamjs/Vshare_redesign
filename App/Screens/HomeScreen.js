import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Animated,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
  Button,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Slider from './Components/Slider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import cars from '../Data/Car';
import colors from '../Config/colors';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

const HomeScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const {width} = useWindowDimensions();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('Thủ Đức, Hồ Chí Minh');
  const [locationPickerOpen, setLocationPickerOpen] = useState(false);
  const [activeBox, setActiveBox] = useState(null); // state to track active box
  // Gradient color in car rental
  const gradient = [colors.lightDark, colors.green];
  // Function to format the price
  const formatPrice = price => {
    return new Intl.NumberFormat('de-DE').format(price);
  };
  const handleConfirmDate = selectedDate => {
    setOpen(false);
    setDate(selectedDate);
    setTime(
      selectedDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
    );
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      {/* Animated Banner */}
      <Animated.Image
        source={require('./../../assets/images/banners/Banner_2.png')}
        style={[
          styles.banner,
          {
            opacity: scrollY.interpolate({
              inputRange: [0, 200],
              outputRange: [1, 0],
              extrapolate: 'clamp',
            }),
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, 200],
                  outputRange: [0, -50],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}
      />
      {/* Contents */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}>
        <View style={styles.content}>
          <Text style={styles.greedingText}>Chào Vshare!</Text>
          {/* Row of vehicle type */}
          <View
            style={{
              backgroundColor: '#FFF',
              marginRight: 20,
              marginLeft: 20,
              borderRadius: 10,
              elevation: 10,
            }}>
            <View style={styles.row}>
              <View style={{width: 100}}>
                <TouchableOpacity
                  style={[
                    styles.boxContainer,
                    {
                      backgroundColor:
                        activeBox === 'oto' ? '#3BB475' : '#F3F7F5',
                    },
                  ]}
                  onPress={() => setActiveBox('oto')}>
                  <Image
                    source={require('./../../assets/images/icons/car_icon.png')}
                    style={styles.boxImage}
                  />
                  <Text style={styles.boxText}>Ô tô</Text>
                </TouchableOpacity>
              </View>
              <View style={{width: 100}}>
                <TouchableOpacity
                  style={[
                    styles.boxContainer,
                    {
                      backgroundColor:
                        activeBox === 'xemay' ? '#3BB475' : '#F3F7F5',
                    },
                  ]}
                  onPress={() => setActiveBox('xemay')}>
                  <Image
                    source={require('./../../assets/images/icons/bike_icon.png')}
                    style={styles.boxImage}
                  />
                  <Text style={styles.boxText}>Xe máy</Text>
                </TouchableOpacity>
              </View>
              <View style={{width: 100}}>
                <TouchableOpacity
                  style={[
                    styles.boxContainer,
                    {
                      backgroundColor:
                        activeBox === 'dichvukhac' ? '#3BB475' : '#F3F7F5',
                    },
                  ]}
                  onPress={() => setActiveBox('dichvukhac')}>
                  <Image
                    source={require('./../../assets/images/icons/user_icon.png')}
                    style={styles.boxImage}
                  />
                  <Text style={styles.boxText}>Dịch vụ khác</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* Picker */}
            <View style={styles.column}>
              <View style={styles.boxContainer}>
                <View
                  style={{
                    paddingBottom: 10,
                    marginEnd: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name="map-marker"
                    size={25}
                    color="red"
                  />
                  <Text style={{fontSize: 12}}> Hãy chọn địa điểm thuê xe</Text>
                </View>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    paddingEnd: 20,
                  }}>
                  <MaterialCommunityIcons
                    name="home"
                    size={25}
                    style={{paddingEnd: 5}}
                  />
                  <View>
                    <TouchableOpacity
                      onPress={() => setLocationPickerOpen(true)}>
                      <Text>Chọn địa điểm</Text>
                      <Text style={{fontSize: 10}}>{location}</Text>
                    </TouchableOpacity>
                    {locationPickerOpen && (
                      <Picker
                        selectedValue={location}
                        onValueChange={itemValue => {
                          setLocation(itemValue);
                          setLocationPickerOpen(false);
                        }}
                        style={{height: 50, width: 150}}>
                        <Picker.Item
                          label="Thủ Đức, Hồ Chí Minh"
                          value="Thủ Đức, Hồ Chí Minh"
                        />
                        <Picker.Item
                          label="Quận 1, Hồ Chí Minh"
                          value="Quận 1, Hồ Chí Minh"
                        />
                        <Picker.Item
                          label="Quận 3, Hồ Chí Minh"
                          value="Quận 3, Hồ Chí Minh"
                        />
                        {/* Add more locations as needed */}
                      </Picker>
                    )}
                  </View>
                  <MaterialCommunityIcons
                    name="timer"
                    size={25}
                    style={{paddingStart: 30, paddingEnd: 5}}
                  />
                  <View>
                    <TouchableOpacity onPress={() => setOpen(true)}>
                      <Text>Chọn ngày</Text>
                      <Text style={{fontSize: 10}}>{time || '7 : 00'}</Text>
                    </TouchableOpacity>
                  </View>
                  <MaterialCommunityIcons
                    name="timer"
                    size={25}
                    style={{paddingStart: 30, paddingEnd: 5}}
                  />
                  <View>
                    <TouchableOpacity onPress={() => setOpen(true)}>
                      <Text>Chọn ngày</Text>
                      <Text style={{fontSize: 10}}>{time || '17 : 00'}</Text>
                    </TouchableOpacity>
                  </View>
                  <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={handleConfirmDate}
                    onCancel={() => setOpen(false)}
                  />
                </ScrollView>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#056938',
                    borderRadius: 10,
                    padding: 8,
                    marginTop: 15,
                    marginBottom: 5,
                    flex: 1,
                    height: '100%',
                    width: '80%',
                    alignContent: 'center',
                    alignItems: 'center',
                    elevation: 10,
                  }}
                  onPress={() => navigation.navigate('Detail')}>
                  <Text
                    style={{color: 'white', fontWeight: '600', fontSize: 19}}>
                    Tìm xe
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Slider */}
          <View style={{marginRight: 10, marginLeft: 10}}>
            <Slider />
          </View>
          {/* Rental Cars */}
          <View>
            <Text
              style={{
                color: colors.gray,
                fontSize: 10 * 2,
                fontWeight: 'bold',
                paddingStart: 20,
                paddingBottom: 15,
              }}>
              Xe đang Hot
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginStart: 20,
              marginEnd: 20,
            }}>
            {cars.map(car => (
              <LinearGradient
                key={car.id}
                colors={gradient}
                style={{
                  height: 230,
                  width: width / 2 - 10 * 3,
                  borderRadius: 10 * 2,
                  marginBottom: 10 * 2,
                  padding: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      elevation: 3,
                    }}>
                    <Text
                      style={{
                        color: colors.light,
                        marginLeft: 10 / 2,
                      }}>
                      {car.rating}
                    </Text>
                  </View>
                  <TouchableOpacity></TouchableOpacity>
                </View>
                <TouchableOpacity>
                  <Image
                    style={{
                      width: '100%',
                      height: 100,
                    }}
                    source={car.image}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 10 * 1.8,
                    color: colors.light,
                    fontWeight: 'bold',
                  }}>
                  {car.name}
                </Text>
                <View
                  style={{
                    marginVertical: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: colors.light,
                      fontSize: 10 * 1.4,
                    }}>
                    {formatPrice(car.price)} đ / Ngày
                  </Text>
                </View>
              </LinearGradient>
            ))}
          </View>
          <View style={styles.spacer}></View>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    width: '100%',
    height: 190,
    position: 'absolute',
    top: 0,
  },
  scrollViewContent: {
    paddingTop: 195,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -20,
    paddingTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginStart: 10,
    marginEnd: 10,
  },
  column: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingBottom: 7,
  },
  greedingText: {
    paddingLeft: 30,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  boxContainer: {
    flex: 1,
    margin: 8,
    marginTop: 15,
    padding: 10,
    backgroundColor: '#F3F7F5',
    borderRadius: 10,
    shadowColor: '#F9F9F9',
    alignItems: 'center',
  },
  boxImage: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  boxText: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  spacer: {
    height: 100,
  },
});
