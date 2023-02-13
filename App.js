import React, {useState, useEffect} from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';

const App = () => {
  const [os, setOs] = useState('');

  useEffect(() => {
    setOs(Platform.OS === 'android' ? 'Android' : 'iOS');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>21 Jack</Text>
      <Text style={styles.os}>({os})</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#def7b7',
  },
  title: {
    color: 'green',
    fontSize: 48,
    fontWeight: 'bold',
    margin: 8,
  },
  os: {
    fontSize: 16,
    fontWeight: '400',
  },
});

export default App;
