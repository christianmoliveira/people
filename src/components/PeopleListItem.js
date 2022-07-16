import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const PeopleListItem = (props) => {
  const { person, navigateToPersonDetail } = props;
  const { first, last } = person.name;

  return (
    <TouchableOpacity onPress={() => navigateToPersonDetail({ person })}>
      <View style={styles.line}>
        <Image
          style={styles.avatar}
          source={{ uri: person.picture.thumbnail }}
        />
        <Text style={styles.lineText}>{`${first} ${last}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
  },
  lineText: {
    flex: 7,
    fontSize: 20,
    paddingLeft: 15,
  },
  avatar: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 50,
    marginLeft: 15,
  },
});

export default PeopleListItem;
