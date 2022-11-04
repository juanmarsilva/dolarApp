import { StyleSheet } from "react-native";

export const colors = {
    background:'#353535',
    text: '#fff',
};

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.background,
    },
    title: {
        fontSize: 40,
        color: colors.text,
    }
});