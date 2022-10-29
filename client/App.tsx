import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  let [ number, setNumber ] = useState<number>(0);

  const handleClick = (e: any) => {
    e.preventDefault();
    setNumber(number++);
  }

  return (
    <View style={styles.container}>
      <Button
        onPress={(e) => handleClick(e)}
        title="GATO MIRA LO QUE HAGO"
        color="#4827c2"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
      <Text style={styles.text}>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 30,    
    fontSize: 30
  }
});
