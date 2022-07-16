import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import React from 'react';

import PeopleListItem from './PeopleListItem';

const PeopleList = (props) => {
  const { people, onPressPerson } = props;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <PeopleListItem
            person={item}
            navigateToPersonDetail={onPressPerson}
          />
        )}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e2f9ff',
  },
});

export default PeopleList;