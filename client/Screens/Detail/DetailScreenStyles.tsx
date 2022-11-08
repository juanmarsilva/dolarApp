import { StyleSheet } from "react-native";
import { colors } from '../../App.style';

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.background,
    },
    title: {
        fontSize: 40,
        marginTop: 10,
        color: colors.text,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    containerGraf: {
        width:'90%',
        height: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display:'flex',
        alignContent: 'center',
        justifyContent:'center'
    },
});