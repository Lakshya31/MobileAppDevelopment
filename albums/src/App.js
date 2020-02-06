/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import Header from './components/Header';
import AlbumList from './components/AlbumList';

class App extends React.Component{
  render(){
    return (
      <SafeAreaView style={{marginBottom:60, borderWidth:5, borderColor:"steelblue"}}>
        <Header title="Albums!" />
        <AlbumList />
      </SafeAreaView>
    );
  }  
};

// const styles = StyleSheet.create({});

export default App;
