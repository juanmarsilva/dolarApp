import { StyleSheet } from "react-native";
import { colors } from "../../App.style";

const firstViewStyle = StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      margin: 20
    },
    title: {
      fontSize: 30,
      color: colors.text
    },
    text: {
      marginTop: 5,
      marginLeft: 'auto',
      marginRight: 'auto',
      color: colors.text
    }
  });

export default firstViewStyle