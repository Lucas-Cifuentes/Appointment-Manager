import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const form = ({list, setHideForm}) => {
  const [patient, setPatient] = useState('');
  const [owner, setOwner] = useState('');
  const [phone, setPhone] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const handleSubmiit = async () => {
    if (patient === '' || owner === '' || phone === '' || symptoms === '') {
      return Alert.alert('ERROR', 'All fields are required', [
        {
          text: 'OK',
        },
      ]);
    } else {
      const Appointment = {
        patient,
        owner,
        phone,
        symptoms,
      };
      const newAppointment = [...list, Appointment];
      try {
        await AsyncStorage.setItem('list', JSON.stringify(newAppointment));
      } catch (error) {
        Alert.alert('ERROR', 'Failed to save appointment', [
          {
            text: 'OK',
          },
        ]);
      }
      setHideForm(true);
    }
  };

  return (
    <ScrollView>
      <Text style={styles.title}>Add a new Appointment</Text>
      <View style={styles.container}>
        <Text style={styles.label}>Patient:</Text>
        <TextInput
          onChangeText={(text) => setPatient(text)}
          style={styles.input}
        />
        <Text style={styles.label}>Owner:</Text>
        <TextInput
          onChangeText={(text) => setOwner(text)}
          style={styles.input}
        />
        <Text style={styles.label}>Phone:</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={(text) => setPhone(text)}
          style={styles.input}
        />
        <Text style={styles.label}>Symptoms:</Text>
        <TextInput
          onChangeText={(text) => setSymptoms(text)}
          style={styles.input}
        />
        <TouchableHighlight
          onPress={() => handleSubmiit()}
          style={styles.button}>
          <View>
            <Text style={styles.text}>Submit</Text>
          </View>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 10,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    marginTop: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#AA0068',
    marginTop: 10,
    borderRadius: 5,
  },
  text: {
    paddingVertical: 10,
    textAlign: 'center',
    color: '#fff',
  },
});

export default form;
