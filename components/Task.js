import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = (props) => {

  return (
    <View style={styles.item}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#C0C0C0',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;