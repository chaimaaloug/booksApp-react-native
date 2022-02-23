import React from "react";
import { View, Text, Image, ScrollView,StyleSheet, SafeAreaView } from "react-native";
import { Appbar, Title } from "react-native-paper";



export const BooksDetailScreen = () => {
  function goBack() {
    
    alert("goBack pressed!");
  }



  return (
    <SafeAreaView>
        <ScrollView>
        <Appbar.Header>
            <Appbar.BackAction onPress={goBack} />
            <Appbar.Content title="Terms and Conditions" />
        </Appbar.Header>
      
        </ScrollView>
    </SafeAreaView>
  );
};