import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import store from './Redux/store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {
  addAuthData,
  addPlaceHolderData,
  setToken,
} from './Redux/placeHolderSlice';
import {
  fetchDataApi,
  fetchDataFromNetwork,
  useGetAuthDataQuery,
  useGetDataQuery,
} from './services/fetchApi';

const NGROK_URL =
  'https://6563-2406-7400-56-77f9-db27-d2c5-34de-7270.ngrok-free.app';
const PLACEHOLDER_API = 'https://jsonplaceholder.typicode.com/todos/1';
const GET_SERVER_DATA = `${NGROK_URL}`;
const REFRESH_TOKEN = `${NGROK_URL}/refresh`;
const GET_AUTHORIZED_DATA = `${NGROK_URL}/authorised`;
const App = () => {
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();
  // const [token, setToken] = useState('undefined');
  const newData = useSelector(state => state.placeHolderReducer);
  console.log('🚀 ~ App ~ newData:', newData);
  const {accessToken, placeholderData, authData} = newData;
  // Using a query hook automatically fetches data and returns query values
  const {data, error, isLoading} = useGetDataQuery('');
  const {
    data: authQueryData,
    error: authError,
    isLoading: authLoading,
    refetch: refetchAuthQuery,
  } = useGetAuthDataQuery(accessToken, {skip: accessToken ? false : true});
  console.log('🚀 ~ App ~ data:', authQueryData, authError, authLoading);

  useEffect(() => {
    if (authQueryData) {
      dispatch(
        addAuthData({
          authData: authQueryData.data,
        }),
      );
    }
  }, [authQueryData]);
  const fetchData = () => {
    fetch(PLACEHOLDER_API)
      .then(res => res.json())
      .then(data => {
        // setData(data);
        // dispatch({type: 'ADD_DATA', payload: data}); // calls reducer
        dispatch(addPlaceHolderData({placeholderData: data}));
      });
  };

  const getServerData = () => {
    console.log('GEtting server data');
    fetchDataFromNetwork();
  };

  const refreshToken = () => {
    fetch(REFRESH_TOKEN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.accessToken);
        dispatch(
          setToken({
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          }),
        );
      })
      .catch(err => console.log(err));
  };
  // const getAuthorisedData = () => {
  //   if (accessToken) {
  //     try {
  //       fetch(GET_AUTHORIZED_DATA, {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       })
  //         .then(response => {
  //           console.log(response);
  //           if (!response.ok) {
  //             throw new Error('Network response was not ok');
  //           }
  //           return response.json();
  //         })
  //         .then(data => {
  //           console.log('authorised data >>>', data);
  //           // setAuthData(data);
  //           dispatch(
  //             addAuthData({
  //               authData: data,
  //             }),
  //           );
  //         })
  //         .catch(err => console.log(err));
  //     } catch (error) {
  //       console.log('inside catch ', error);
  //     }
  //   } else {
  //     console.log('no token');
  //   }
  // };
  return (
    <View
      style={{display: 'flex', justifyContent: 'space-between', margin: 10}}>
      <Text>REDUX / RTK Query</Text>
      <Button title="press me" onPress={fetchData} />

      {placeholderData?.map(item => (
        <Text>{item.title}</Text>
      ))}
      <View style={{marginTop: 10}}>
        <Button title="get data" onPress={getServerData} />
      </View>
      <View style={{marginTop: 10}}>
        <Button title="refresh access token" onPress={refreshToken} />
      </View>
      <View style={{marginTop: 10}}>
        <Button title="Get Authorized Data" onPress={refetchAuthQuery} />
      </View>
      <Text>{authData && JSON.stringify(authData)}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
