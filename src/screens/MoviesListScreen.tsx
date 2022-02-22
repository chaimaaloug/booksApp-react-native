import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, StatusBar, FlatList } from "react-native";
import {Card } from 'react-native-paper';
import {useMovie} from '../hooks/useMovie'


const renderItem = ({ item }) => {
  
  return (
 
    <Card style={styles.card}>
      <Card.Content>
          {/* <Image style={{
        width: 51,
        height: 51,
        resizeMode: 'contain',}} source={{ uri: 'https://image.tmdb.org/t/p/w500',}}/> */}
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.txt}>{item.overview}</Text>
          <Text style={styles.txt}>{item.vote_average}</Text>
        </View>
    
      </Card.Content>
    </Card>

  
  )
  };

export const MoviesListScreen = () => {
  const {isLoading, isError, data}= useMovie()
   console.log(isLoading)
   console.log(data)
  
  if (isLoading) {
   return  <Text>Loading</Text>
  }

  if (isError) {
    return <Text> We are sorry something bad happend ... </Text>
  }
 console.log(data)

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <FlatList
    
          data={data.results}
          renderItem={renderItem}
          keyExtractor={item => item.title}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  card: {
    backgroundColor: "#7B5095",
    marginBottom: 20,
  },

  txt:{
    color:"#ffb687",
    fontWeight: "bold",
  },

  title: {
    fontWeight: "bold",
    fontSize: 25,
    color:"#ffb687",
    
    marginBottom: 12,
  },

});