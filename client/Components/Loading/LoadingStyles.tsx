import { StyleSheet } from "react-native";
import { colors } from "../../App.style";

const LoadingStyle = StyleSheet.create({
    container: {
        width:'100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    text : {
        fontSize: 30,
        color: colors.text,
    }
});

export default LoadingStyle