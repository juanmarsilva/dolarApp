import { StyleSheet } from 'react-native';
import { colors } from '../../App.style';

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
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
        backgroundColor: colors.containersBack,
        borderColor: colors.containersBack,
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
        backgroundColor: colors.containersBack,
        borderColor: colors.containersBack,
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
        height: '140%',
        backgroundColor: colors.selected,
        borderRadius: 100,
        top: -8,
        left: -9,
    },
    home: {
        position: 'absolute',
        zIndex: -5,
        width: '100%',
        height: '140%',
        backgroundColor: colors.selected,
        borderRadius: 100,
        top: -12,
        left: -14,
    },
    profile: {
        position: 'absolute',
        zIndex: -5,
        width: '100%',
        height: '110%',
        backgroundColor: colors.selected,
        borderRadius: 100,
        top: -3,
        left: -4,
    }
});
