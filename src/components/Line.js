import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Line = ({ label = '', content = '-' }) => {
  return (
    <View style={styles.line}>
      <Text style={[
        styles.cell, 
        styles.label,
        label.length > 8 ? styles.longLabel : null,
      ]}>{ label }:</Text>
      <Text style={[styles.cell, styles.content]}>{ content }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: '#c5c5c5',
  },
  cell: {
    fontSize: 18,
    paddingLeft: 5,
  },
  label: {
    fontWeight: 'bold',
    flex: 1,
  },
  content: {
    flex: 4,
  },
  longLabel: {
    fontSize: 10,
  },
});

export default Line;