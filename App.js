import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Alert} from 'react-native';

import Form from './src/components/form';
import Appointments from './src/components/appointment';

import AsyncStorage from '@react-native-community/async-storage';

const App = () => {
  const [hideForm, setHideForm] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    getDataStorage();
  }, [list]);

  const getDataStorage = async () => {
    try {
      const dataStorage = await AsyncStorage.getItem('list');
      if (dataStorage) {
        setList(JSON.parse(dataStorage));
      }
    } catch (error) {
      Alert.alert('ERROR', 'Failed to get data from storage', [
        {
          text: 'OK',
        },
      ]);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Appointment Manager</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => setHideForm(!hideForm)}>
          <View>
            <Text style={styles.textButton}>Add/View Appointment</Text>
          </View>
        </TouchableHighlight>
        {hideForm ? (
          <Appointments list={list} setList={setList} />
        ) : (
          <Form list={list} setList={setList} setHideForm={setHideForm} />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AA076B',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#00000050',
  },
  textButton: {
    paddingVertical: 10,
    textAlign: 'center',
    color: '#fff',
  },
});

export default App;
