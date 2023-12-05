import {View, Text, StyleSheet} from 'react-native';
import React, {PropsWithChildren} from 'react';

type CurencyButtonsProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

const CurrencyButton = (props: CurencyButtonsProps) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  flag: {
    fontSize: 26,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  country: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
});

export default CurrencyButton;
