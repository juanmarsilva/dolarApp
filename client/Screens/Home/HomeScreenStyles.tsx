import { StyleSheet } from "react-native";

export const colors = {
    background:'#353535',
    otherBackground: '#252524',
    containersBack: 'black',
    selected: '#338b85',
    text: '#fff',
    contrarianText: '#000',
    buttonContainer: '#344e41',
};

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
    // otherDivs: {
    //   width: 140,
    //   height: 90,
    //   marginLeft: 'auto',
    //   marginRight: 'auto',
    //   marginTop: 40,
    //   borderRadius: 12,
    //   backgroundColor: colors.containersBack
    // },
    title: {
        backgroundColor: 'transparent',
    },
    // lastDivs: {
    //   width: 140,
    //   height: 90,
    //   marginLeft: 'auto',
    //   marginRight: 'auto',
    //   marginTop: 40,
    //   marginBottom: 100,
    //   borderRadius: 12,
    //   backgroundColor: colors.containersBack
    // }, 
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