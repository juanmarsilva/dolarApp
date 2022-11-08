import { StyleSheet } from "react-native";
import { colors } from '../../App.style';

export const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        backgroundColor: colors.background
    },
    firstDiv: {
        width: 140,
        height: 90,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 40,
        borderRadius: 8,
        backgroundColor: colors.containersBack,
    },
    title: {
        backgroundColor: 'transparent',
    },
    containerCards: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        flexWrap: 'wrap',
    },
    shadowProp: {
        shadowColor: '#413f3f',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: .3,
        shadowRadius: 3,
        elevation: 40
    }
});