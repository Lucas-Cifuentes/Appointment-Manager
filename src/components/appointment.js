import React from 'react';

import {Text, View, StyleSheet, FlatList} from 'react-native';
import Card from './card';
import AsyncStorage from '@react-native-community/async-storage';

const appointment = ({list, setList}) => {
  const eliminateAppointment = (id) => {
    const filterList = list.filter((appointment) => appointment.id !== id);
    setList(filterList);
    AsyncStorage.setItem('list', JSON.stringify(filterList));
  };

  return (
    <>
      <Text style={styles.title}>Appointment List</Text>
      <View style={styles.container}>
        {list.length > 0 ? (
          <FlatList
            data={list}
            renderItem={({item}) => (
              <Card data={item} eliminateAppointment={eliminateAppointment} />
            )}
            keyExtractor={(appointment) => appointment.id}
          />
        ) : (
          <Text style={styles.subtitle}>List is Empty</Text>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default appointment;
