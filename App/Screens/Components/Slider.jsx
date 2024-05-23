import {View, Text, Dimensions, FlatList, Image} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import sliderImageData from '../../Data/SliderBanners';

export default function Slider() {
  const sliderRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth - 48;

  // Auto Slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const newIndex =
          prevIndex === sliderImageData.length - 1 ? 0 : prevIndex + 1;
        // Calculate the offset to center the image
        const offset = newIndex * itemWidth + (itemWidth - screenWidth) / 3.25;
        // Update FlatList with calculated offset
        sliderRef.current.scrollToOffset({offset, animated: true});
        return newIndex;
      });
    }, 3000); // slide change per 3 sec

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  // Display slider images
  const renderItems = ({item, index}) => {
    return (
      <View
        style={{
          width: itemWidth,
          height: 200,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 30,
        }}>
        <Image
          style={{
            width: '100%',
            height: '70%',
            resizeMode: 'cover',
            borderRadius: 10,
          }}
          source={item.image}
        />
      </View>
    );
  };

  return (
    // View image for slider
    <View>
      <FlatList
        ref={sliderRef}
        data={sliderImageData}
        renderItem={renderItems}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        getItemLayout={(data, index) => ({
          length: itemWidth,
          offset: itemWidth * index,
          index,
        })}
      />
    </View>
  );
}
