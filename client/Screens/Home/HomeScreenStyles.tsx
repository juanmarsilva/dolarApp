import { StyleSheet } from "react-native";
import { colors } from '../../App.style';

export const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        backgroundColor: colors.background,
    },
    containerCards: {
        flexDirection: 'row',
        width: '100%',
        height: '80%',
        flexWrap: 'wrap',
        justifyContent:'center'
    },
    firstDiv: {
        width: 140,
        height: 90,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30,
        borderRadius: 8,
        backgroundColor: colors.containersBack,
    },
    title: {
        backgroundColor: 'transparent',
    },
});