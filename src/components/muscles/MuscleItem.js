import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { useDispatch } from 'react-redux';

import { remove } from '../../stores/muscleSlice';

export function MuscleItem ({ muscle }) {
  const dispatch = useDispatch();
  
  const onPressRemoveMuscle = () => {
    dispatch(remove(muscle.id))
  };

  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>{ muscle.description }</Text>
      <Button
          onPress={onPressRemoveMuscle}
          title="remover"
          color="#FF1584"
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
  },
});