import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import store from './Redux/store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {addPlaceHolderData} from './Redux/placeHolderAction';

const PLACEHOLDER_API = 'https://jsonplaceholder.typicode.com/todos/1';
const App = () => {
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const todos = useSelector(state => state.data);
  console.log('🚀 ~ App ~ todos:', todos);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const fetchData = async () => {
    await fetch(PLACEHOLDER_API)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // setData(data);
        dispatch({type: 'ADD_DATA', payload: {data: data}}); // calls reducer
      });
  };
  return (
    <View>
      <Text>App</Text>
      <Button title="press me" onPress={fetchData} />
      {/* {todos.map(item => (
        <Text>{item}</Text>
      ))} */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
