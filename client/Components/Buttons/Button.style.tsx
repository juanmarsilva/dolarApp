import { StyleSheet } from "react-native";
import { colors } from '../../App.style';

export const styles = StyleSheet.create({
    containerButton:{
        backgroundColor: colors.selected,
        padding:15,
        width:'80%',
        display:'flex',
        alignSelf:'center',
        marginVertical:15,
        alignItems:'center',
        borderRadius:8
    },
    selectedButton:{
        backgroundColor: colors.selectedIntense,
        padding:15,
        width:'80%',
        display:'flex',
        marginVertical:15,
        alignSelf:'center',
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