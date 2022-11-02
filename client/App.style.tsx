import { StyleSheet } from "react-native";

export const colors = {
  background:'#353535',
  otherBackground: '#252524',
  containersBack: '#344e41',
  selected: '#338b85',
  text: '#fff',
  contrarianText: '#000'
}

const styles = StyleSheet.create({
    container: {
      width:'100%',
      height:'100%',
      backgroundColor: colors.background
    },
    firstDiv: {
      width: 220,
      height: 130,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 40,
      borderRadius: 12,
      backgroundColor: colors.containersBack
    },
    otherDivs: {
      width: 220,
      height: 130,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 40,
      borderRadius: 12,
      backgroundColor: colors.containersBack
    },
    title: {
      backgroundColor: 'transparent',
    },
    lastDivs: {
      width: 220,
      height: 130,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 40,
      marginBottom: 100,
      borderRadius: 12,
      backgroundColor: colors.containersBack
    }
  });

export default styles