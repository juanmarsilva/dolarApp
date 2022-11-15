import { StyleSheet } from "react-native";
import { colors } from '../../App.style';

export const styles = StyleSheet.create({
    containerButton:{
        padding:15,
        width:'85%',
        display:'flex',
        alignSelf:'center',
        marginVertical:15,
        alignItems:'center',
        borderRadius:8
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color: colors.text,
        letterSpacing:1
    },
})