import { useNavigation } from "@react-navigation/native";
import React from "react";
import {StyleSheet, Text, View, Image, StatusBar, FlatList,TouchableOpacity, SafeAreaView } from "react-native";
import {Card } from 'react-native-paper';
import {useBook} from '../hooks/useBook'
import { Routes } from "../navigation/Routes";

const ReadMoreButton = () => {
  const navigation = useNavigation()

  function navigateToDetail() {
    navigation.navigate(Routes.BOOK_DETAIL_SCREEN);
  }
  return (
    <TouchableOpacity  onPress={navigateToDetail}>
       <Text style={styles.button}> Read more 👉🏻 </Text>
    </TouchableOpacity>
  )
}

const renderItem = ({item}) => {

  return (
    <SafeAreaView style={styles.background}>
      <Card style={styles.card}>
        <Card.Content>
                <Image style={styles.image} source={{uri : item.book_image}}/>
                <View style={styles.info}>
                
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.desc}>{item.description}</Text>
                  <Text style={styles.txt}>ISBN : {item.primary_isbn10}</Text>
                  <Text style={styles.txt}>Author : {item.author}</Text>
                  <Text style={styles.txt}>Contributor : {item.contributor}</Text>
                  <Text style={styles.txt}>Publisher : {item.publisher}</Text>  
                

                </View>

                <ReadMoreButton  />     
        </Card.Content>
      </Card>
    </SafeAreaView>
   
    
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
   
      <View style={styles.container}>
        <FlatList
    
          data={data.results.books}
          renderItem={renderItem}
          keyExtractor={item => item.title}
        />
      </View>
  
  );
};

const styles = StyleSheet.create({
 

  background: {
    backgroundColor: '#10162F',
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    padding: 33,
  },

  image: {
      width: 180,
      height: 180,
      marginBottom: 20,
      alignSelf: "center",
      resizeMode: 'contain', 
      borderRadius:7,
  },

  info: {
    marginBottom: 20,
    fontWeight: "bold",
    
  },

  card: {
    backgroundColor: "#FFF4E4",
    borderRadius:22, 
  },
 
  desc:{
    textAlign: "justify",
    marginBottom: 10,
    color:'black',
  },

  txt:{
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "justify",
    color:"black",
 
  },

  title: {
    fontWeight: "bold",
    fontSize: 25,
    color: "black",
    textAlign:"center",
    marginBottom: 18,
  },

  button: {
    fontStyle: "italic",
    fontWeight: "bold",
    color:"black", 
  },

});