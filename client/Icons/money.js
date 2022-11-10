import React, { useRef } from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet } from 'react-native';

export default Money = ({focused}) => {
    const animation = useRef(null);
  if(focused) animation?.current?.play()
  const icon = focused?require('./peso.json'):require('./money.json')
    return (
        <LottieView
            style={styles.money}
            ref={animation}
            loop={false}
            autoPlay={false}
            source={icon}
        />
    );
};

export const styles = StyleSheet.create({
    money: {
        width: 50,
        height: 50,
        color:'red',
        tintColor:'red'
    }
})
