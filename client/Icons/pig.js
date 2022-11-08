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
        // position: 'absolute',
        width: 60,
        height: 60,
        // color:colors.contrarianText,
        // top: 0,
        // left: 0,
        // zIndex: 10,
        // color: '#fff'
    }
})
