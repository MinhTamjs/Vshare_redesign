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

const HomeScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const {width} = useWindowDimensions();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [activeBox, setActiveBox] = useState(null); // state to track active box

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
          <View style={{backgroundColor: "#FFF", marginRight: 20, marginLeft: 20, borderRadius: 10, elevation: 10,}}>
            <View style={styles.row}>
              <View style={{width: 100}}>
                <TouchableOpacity
                  style={[
                    styles.boxContainer,
                    {backgroundColor: activeBox === 'oto' ? '#D9F7EC' : '#fff'},
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
                        activeBox === 'xemay' ? '#D9F7EC' : '#fff',
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
            </View>
            {/* Picker */}
            <View style={styles.column}>
              <View style={styles.boxContainer}>
                <View
                  style={{
                    paddingBottom: 10,
                    marginEnd: 70,
                    flexDirection: "row",
                    alignItems: "center",
                  }}>
                  <MaterialCommunityIcons name="map-marker" size={25} color="red" />
                  <Text style={{fontSize: 12}}> Hãy chọn địa điểm thuê xe</Text>
                </View>
                <Button title="Open" onPress={() => setOpen(true)} />
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </View>
            </View>
          </View>
          {/* Slider */}
          <View style={{marginRight: 10, marginLeft: 10}}>
            <Slider />
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
    paddingHorizontal: 50,
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
    padding: 10,
    backgroundColor: '#F5F6F4',
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
  },
  spacer: {
    height: 100,
  },
});
