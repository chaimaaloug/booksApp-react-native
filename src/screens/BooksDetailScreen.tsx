import React from "react";
import { View, Text, Image, ScrollView,StyleSheet, SafeAreaView } from "react-native";
import { Appbar, Title } from "react-native-paper";



export const BooksDetailScreen = () => {
  function goBack() {
    alert("goBack pressed!");
  }

  return (
      
  <SafeAreaView style={styles.background}>
        <ScrollView>
  
          <View>
              <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Text>
              
              <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Text>
            

              <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Text>
            
          </View>
        </ScrollView>
    </SafeAreaView>

  );
};


const styles = StyleSheet.create({
 

  background: {
    backgroundColor: '#10162F',
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    padding: 38,
  },

  text: {
    color:'#FFF4E4',
    textAlign: 'justify',
    marginBottom: 28,
  }



});

