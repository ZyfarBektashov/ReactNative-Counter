import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import CustomButton from '../CustomButton';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={styles.counterText}>{counter}</Text>
      <CustomButton title="Counter" onPress={() => setCounter(counter + 1)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    padding: 8,
    fontSize: 40,
    fontWeight: '500',
  },
});

export default Counter;
