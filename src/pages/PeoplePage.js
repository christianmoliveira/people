import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import React, { Component } from 'react';

import PeopleList from '../components/PeopleList';

import axios from 'axios';

export default class PeoplePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      loading: false,
      error: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get('https://randomuser.me/api/?nat=br&results=150')
      .then((response) => {
        const { results } = response.data;
        this.setState({
          people: results,
          loading: false,
        });
      })
      .catch(error => {
        this.setState({ loading: false, error: true });
      });
  }

  renderLoad() {
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="#6ca2f7" />;
    }

    return null;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? (
          <ActivityIndicator size="large" color="#6ca2f7" />
        ) : this.state.error ? (
          <Text style={styles.error}>Ops..algo deu errado!</Text>
        ) : (
          <PeopleList
            people={this.state.people}
            onPressPerson={(pageParams) => {
              this.props.navigation.navigate('PersonDetail', pageParams);
            }}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 18,
  }
});
