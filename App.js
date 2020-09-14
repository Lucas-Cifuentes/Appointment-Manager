import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

import Form from './src/components/form';
import Appointments from './src/components/appointment';

const App = () => {
  const [hideForm, setHideForm] = useState(true);
  const [list, setList] = useState([]);

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
