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
});