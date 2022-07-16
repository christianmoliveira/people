import { Text, View, Image, StyleSheet } from 'react-native';
import React, { Component } from 'react';

import Line from '../components/Line';

export class PersonDetailPage extends Component {
  render() {
    const { person } = this.props.route.params;

    console.log(person);

    return (
      <View style={styles.container}>
        <Image source={{ uri: person.picture.large }} style={styles.avatar} />
        <View style={styles.detailContainer}>
          <Line label="Email" content={person.email} />
          <Line label="Cidade" content={person.location.city} />
          <Line label="Estado" content={person.location.state} />
          <Line label="Tel" content={person.phone} />
          <Line label="Cel" content={person.cell} />
          <Line label="Nacionalidade" content={person.nat} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  avatar: {
    aspectRatio: 1,
  },
  detailContainer: {
    backgroundColor: '#e2f9ff',
    marginTop: 20,
    elevation: 1,
  },
});

export default PersonDetailPage;
