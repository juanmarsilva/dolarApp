import React, { useRef } from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet } from 'react-native';

export default Money = ({focused}) => {
    const animation = useRef(null);
  if(focused) animation?.current?.play()
    return (
        <LottieView
            style={styles.money}
            ref={animation}
            loop={false}
            autoPlay={false}
            source={require('./money.json')}
        />
    );
};

export const styles = StyleSheet.create({
    money: {
        width: 60,
        height: 60,
    }
})
