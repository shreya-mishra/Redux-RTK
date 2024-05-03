import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import store from './Redux/store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {addPlaceHolderData} from './Redux/placeHolderSlice';

const PLACEHOLDER_API = 'https://jsonplaceholder.typicode.com/todos/1';
const App = () => {
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const todos = useSelector(state => state.placeHolderData);
  console.log('🚀 ~ App ~ todos:', todos);

  const fetchData = () => {
    console.log('here>>> stupid');
    fetch(PLACEHOLDER_API)
      .then(res => res.json())
      .then(data => {
        // setData(data);
        // dispatch({type: 'ADD_DATA', payload: data}); // calls reducer
        dispatch(addPlaceHolderData(data));
      });
  };
  return (
    <View>
      <Text>App</Text>
      <Button title="press me" onPress={fetchData} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
