import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import store from './Redux/store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {addPlaceHolderData} from './Redux/placeHolderSlice';

const PLACEHOLDER_API = 'https://jsonplaceholder.typicode.com/todos/1';
const App = () => {
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const newData = useSelector(state => state);
  console.log('🚀 ~ App ~ newData:', newData);
  // const {id} = newData?.[0];
  // useEffect(() => {
  //   setData(newData);
  // }, [newData]);
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
      <Text>REDUX / RTK Query</Text>
      <Button title="press me" onPress={fetchData} />
      {/* <Text style={{color: 'white'}}>{id}</Text> */}
      {/* <Text>{data[0]?.id}</Text>
      <Text>{data[0]?.title}</Text>
      <Text>{data[0]?.completed}</Text> */}
      {newData?.map(item => (
        <Text>{item.title}</Text>
      ))}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
