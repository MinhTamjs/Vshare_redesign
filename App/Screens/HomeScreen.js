import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Animated,
  ScrollView,
  useWindowDimensions,
} from 'react-native';

const HomeScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const {width} = useWindowDimensions();

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
        contentContainerStyle={styles.scrollViewContent}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}>
        <View style={styles.content}>
          <Text style={styles.greedingText}>Chào Vshare!</Text>
          {/* Row of vehicle type */}
          <View style={styles.row}>
            <View style={styles.boxContainer}>
              <Image
                source={require('./../../assets/images/icons/car_icon.png')}
                style={styles.boxImage}
              />
              <Text style={styles.boxText}>Ô tô</Text>
            </View>
            <View style={styles.boxContainer}>
              <Image
                source={require('./../../assets/images/icons/bike_icon.png')}
                style={styles.boxImage}
              />
              <Text style={styles.boxText}>Xe máy</Text>
            </View>
          </View>
          {/* Picker */}
          <View style={styles.column}>
            <View style={styles.boxContainer}>
              <Image
                source={{uri: 'https://via.placeholder.com/150'}}
                style={styles.boxImage}
              />
            </View>
            <View style={styles.boxContainer}>
              <Image
                source={{uri: 'https://via.placeholder.com/150'}}
                style={styles.boxImage}
              />
            </View>
            <View style={styles.boxContainer}>
              <Image
                source={{uri: 'https://via.placeholder.com/150'}}
                style={styles.boxImage}
              />
            </View>
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
    paddingTop: 190,
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
    paddingHorizontal: 20,
  },
  greedingText: {
    paddingLeft: 30,
    paddingBottom: 8,
  },
  boxContainer: {
    flex: 1,
    margin: 10,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 3,
    alignItems: 'center',
  },
  boxImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  boxText: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  spacer: {
    height: 100,
  },
});
