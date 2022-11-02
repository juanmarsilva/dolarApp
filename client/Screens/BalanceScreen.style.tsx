import { StyleSheet } from "react-native";
import { colors } from "../App.style";

const balanceStyle = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        width: '100%',
        height:'100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 40,
        color: colors.text,
        alignSelf: 'center',
    },
    input: {
        margin: 20,
        height:60,
        width:'50%',
        fontSize: 20,
        alignSelf: 'center',
        color: colors.otherBackground,
        backgroundColor: colors.selected
    }
});

export default balanceStyle