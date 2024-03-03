import { useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  View,
  TextInput,
  Button,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { add } from '../../stores/muscleSlice'

import { MuscleItem } from './MuscleItem';

export function MuscleList () {
  const muscles = useSelector(state => state.muscle.muscles);
  const dispatch = useDispatch();

  const [ muscleDescription, onChangeMuscleDescription ] = useState('');
  const onPressAddMuscle = () => {
    dispatch(add({
      description: muscleDescription,
    }));

    onChangeMuscleDescription('');
  }

  return (
    <SafeAreaView style={ styles.container }>
      <View>
        <TextInput
          onChangeText={onChangeMuscleDescription}
          value={muscleDescription}
          placeholder="Descrição"
        />
        <Button
          onPress={onPressAddMuscle}
          title="Adicionar"
          color="#841584"
        />
      </View>
      <FlatList
        data={ muscles }
        renderItem={({ item }) => <MuscleItem muscle={ item } />}
        keyExtractor={ muscle => muscle.id }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});