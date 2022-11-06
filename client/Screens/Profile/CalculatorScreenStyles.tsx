import { StyleSheet } from "react-native";

export const colors = {
    backgroundColor: '#333236',
    title: '#fff',
};

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundColor,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 40,
        color: colors.title,
        alignSelf: "center",
    },
    input: {
        margin: 20,
        height:60,
        width:'50%',
        fontSize: 20,
        alignSelf: 'center',
        textAlign: 'center',
        borderRadius: 12,
        color: colors.title,
        backgroundColor: colors.title
    }
});