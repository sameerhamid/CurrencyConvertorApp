import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
//constants
import {currencyByRupee} from './constants';
//compontent
import CurrencyButton from './components/CurrencyButton';
// snackbar
import Snackbar from 'react-native-snackbar';
function App(): JSX.Element {
  const [inputVal, setInputVal] = useState('');
  const [resultVal, setResultVal] = useState('');
  const [targetCurrencyVal, setTargetCurrencyVal] = useState('');

  const handleButtonPressed = (targetCurrencyVal: Currency) => {
    console.log(inputVal);

    if (!inputVal) {
      return Snackbar.show({
        text: 'enter a value to convert',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'teal',
        textColor: 'white',
      });
    }

    const inputAmount = parseFloat(inputVal);
    console.log({inputAmount});

    if (!isNaN(inputAmount)) {
      const convertedVal = inputAmount * targetCurrencyVal.value;
      // console.log({convertedVal});
      console.log({targetCurrencyVal});

      const result = `${targetCurrencyVal.symbol} ${convertedVal.toFixed(2)}`;

      setResultVal(result);
      setTargetCurrencyVal(targetCurrencyVal.name);
    } else {
      return Snackbar.show({
        text: 'Not a valid number to convert',
        backgroundColor: 'teal',
        textColor: 'white',
      });
    }
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeeContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              value={inputVal}
              maxLength={14}
              clearButtonMode="always"
              onChangeText={setInputVal}
              keyboardType="number-pad"
              placeholder="Enter amount in rupees"
              style={styles.textInput}
            />
          </View>
          {resultVal && <Text style={styles.resultText}>{resultVal}</Text>}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Pressable
                style={[
                  styles.button,
                  targetCurrencyVal === item.name && styles.selected,
                ]}
                onPress={() => handleButtonPressed(item)}>
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  topContainer: {
    marginTop: 28,
    // flexDirection: 'row',
  },
  rupeeContainer: {
    flexDirection: 'row',
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rupee: {
    width: '10%',
    textAlign: 'center',
    fontSize: 22,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '90%',
  },
  resultText: {
    fontSize: 22,
    marginTop: 18,
    textAlign: 'center',
  },
  bottomContainer: {
    marginTop: 22,
  },
  button: {
    width: 102,
    height: 80,
    backgroundColor: 'teal',
    marginRight: 11,
    marginBottom: 20,
    borderRadius: 10,
  },
  selected: {
    backgroundColor: 'orange',
  },
});

export default App;
