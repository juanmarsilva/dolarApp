import { StyleSheet } from "react-native";

export const colors = {
    background:'#353535',
    containersBack: 'black',
    selected: '#338b85',
    text: '#fff',
};

const balanceStyle = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        width:'100%',
        height: '100%',
        marginBottom: 60,
        display: 'flex',
        justifyContent: 'flex-start',
    },
    boxUp : {
        height: 150,
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
        textAlign: 'center',
        borderRadius: 12,
        color: colors.text,
        backgroundColor: colors.containersBack
    },
    boxDown: {
        height: 1000,
        marginBottom: 100
    },
    table:{
        width: '80%',
        height: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 5,
        paddingBottom: 5
    },
    text: {
        color:colors.text
    },
    leftCell: {
        borderColor: colors.selected,
        borderWidth: 0.5,
        padding: 5,
    },
    rightCell: {
        borderColor: colors.selected,
        borderWidth: 0.5,
        padding: 5,
        display:'flex',
        justifyContent: "center",
    },
    insideCell: {
        display:'flex',
        justifyContent: "center",
    },
    textUVA:{
        color:colors.text,
        width:'80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize:10
    }
});

export default balanceStyle;
