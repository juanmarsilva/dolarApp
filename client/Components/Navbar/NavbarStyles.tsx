import { StyleSheet } from 'react-native';
// import { colors } from '../../App.style';

export const colors = {
    otherBackground: '#252524',
    selected: '#338b85',
    buttonContainer: '#344e41',
    contrarianText: '#000',
}

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: colors.otherBackground,
        width: '100%',
        height: 60,
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        position: 'relative',
        width: 60,
        borderRadius: 50,
        top: -20,
        backgroundColor: colors.buttonContainer,
        borderColor: colors.buttonContainer,
        borderWidth: .5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centralButton: {
        position: 'relative',
        width: 90,
        height: 90,
        borderRadius: 50,
        top: -40,
        backgroundColor: colors.buttonContainer,
        borderColor: colors.buttonContainer,
        borderWidth: .5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        backgroundColor: 'transparent',
        border: 'none',
    }, 
    balance: {
        position: 'absolute',
        zIndex: -5,
        width: '100%',
        height: '100%',
        backgroundColor: colors.selected,
        borderRadius: 100,
        top: 0,
        left: 0,
    },
    home: {
        position: 'absolute',
        zIndex: -5,
        width: '100%',
        height: '150%',
        backgroundColor: colors.selected,
        borderRadius: 100,
        top: -14,
        left: -15,
    },
    profile: {
        position: 'absolute',
        zIndex: -5,
        width: '100%',
        height: '100%',
        backgroundColor: colors.selected,
        borderRadius: 100,
        top: 0,
        left: 0,
    },
});
