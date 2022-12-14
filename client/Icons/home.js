import LottieView from 'lottie-react-native';
import { StyleSheet } from 'react-native';
import React, { useRef } from 'react';

export default function HomeIcon ({focused}) {
    const animation = useRef(null);
  if(focused) animation?.current?.play()
    return (
        <LottieView
            style={styles.home}
            ref={animation}
            loop={false}
            autoPlay={false}
            source={require('./home.json')}
        />
    );
};

export const styles = StyleSheet.create({
    home: {
        width: 40,
        height: 40,
    }
})
