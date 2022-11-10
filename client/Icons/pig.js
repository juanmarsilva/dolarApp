import LottieView from 'lottie-react-native';
import { StyleSheet } from 'react-native';
import React, { useRef } from 'react';

export default Pig = ({focused}) => {
    const animation = useRef(null);
  if(focused) animation?.current?.play(45,112)
    return (
        <LottieView
            style={styles.pig}
            ref={animation}
            loop={false}
            autoPlay={false}
            source={require('./pig.json')}
        />
    );
};

export const styles = StyleSheet.create({
    pig: {
        width: 50,
        height: 50,
    }
})
