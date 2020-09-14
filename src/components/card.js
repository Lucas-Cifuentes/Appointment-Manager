import React from 'react';

import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';

const card = ({data, eliminateAppointment}) => {
  const handleEliminate = (id) => {
    eliminateAppointment(id);
  };

  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.label}>
          Patient: <Text style={styles.subitle}>{data.patient}</Text>
        </Text>
      </View>
      <View>
        <Text style={styles.label}>
          Owner: <Text style={styles.subitle}>{data.owner}</Text>
        </Text>
      </View>
      <View>
        <Text style={styles.label}>
          Phone: <Text style={styles.subitle}>{data.phone}</Text>
        </Text>
      </View>
      <View>
        <Text style={styles.label}>
          Symptoms: <Text style={styles.subitle}>{data.symptoms}</Text>
        </Text>
      </View>
      <TouchableHighlight onPress={() => handleEliminate(data.id)}>
        <View style={styles.button}>
          <Text style={styles.textButton}>Eliminate &times;</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  subitle: {
    fontSize: 16,
    color: '#838383',
  },
  card: {
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2',
  },

  button: {
    backgroundColor: '#E11818',
    borderRadius: 10,
    marginVertical: 5,
  },
  textButton: {
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default card;
