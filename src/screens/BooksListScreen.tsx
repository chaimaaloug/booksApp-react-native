import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, StatusBar, FlatList,TouchableOpacity } from "react-native";
import {Card } from 'react-native-paper';
import {useBook} from '../hooks/useBook'
import { Routes } from "../navigation/Routes";

const ReadMoreButton = () => {
  const navigation = useNavigation()
  function navigateToDetail() {
    navigation.navigate(Routes.BOOK_DETAIL_SCREEN);
  }
  return (
    
    <TouchableOpacity onPress={navigateToDetail}>
    <Text> Read more </Text>
 </TouchableOpacity>
  )
}
const renderItem = ({item}) => {
  
 
  return (
 
    <Card style={styles.card}>
      <Card.Content>
          <Image style={{
        width: 290,
        height: 290,
        resizeMode: 'contain', borderRadius:7,}} source={{uri : item.book_image}}/>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.txt}>{item.description}</Text>
          <Text style={styles.txt}>Author : {item.author}</Text>
          <Text style={styles.txt}>Publisher : {item.publisher}</Text>
           
        </View>

          <ReadMoreButton />
       
      </Card.Content>
    </Card>

  
  )
  };

export const BooksListScreen = () => {

  const {isLoading, isError, data}= useBook()
   
  
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
    
          data={data.results.books}
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