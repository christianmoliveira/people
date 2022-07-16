import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Header = (props) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{props.title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#6ca2f7',

    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    marginVertical: 15,
  },
});

export default Header;
