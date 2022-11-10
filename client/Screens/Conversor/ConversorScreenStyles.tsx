import { StyleSheet } from "react-native";
import { colors } from '../../App.style';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: colors.text,
        textAlign: "center",
        marginTop: 20,
    },
    input: {
        margin: 20,
        height:60,
        width:'45%',
        textAlign: 'center',
        fontSize: 20,
        borderRadius: 12,
        color: 'black',
        backgroundColor: colors.containersBack,
    },
    containerAllInputs: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 100,
    },
    containerInput: {
        display: 'flex',
        width: '92%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    label: {
        color: colors.text,
        fontSize: 15,
        textAlign: 'center',
        width: '45%',
    }
});