import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, Text,TouchableOpacity, Image } from "react-native";
import {Card } from 'react-native-paper';
import {useBook} from '../hooks/useBook'
import { Routes } from "../navigation/Routes";


export const LaunchScreen = (props) => {
    function navigateToList() {
        props.navigation.navigate(Routes.BOOKS_LIST_SCREEN);
    }

    function navigateToTerms() {
        props.navigation.navigate(Routes.TERMS_SCREEN);
    }

    return (
        <SafeAreaView style={styles.background}>
              <Image style={styles.image} source={require('../../assets/back.png')} />

            <TouchableOpacity onPress={navigateToList}>
                <Text style={styles.text}> Today a reader </Text>
                <Text style={styles.text}> Tomorrow a leader </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToTerms}>
              <Text style={styles.terms}> Read terms and Conditions </Text>
           </TouchableOpacity>

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
       padding: 33,
   

    },

    image: {
        width:'100%',
        height:'40%',
        resizeMode: 'contain',
        alignSelf:'center',
        marginTop: 93,
        marginBottom: 23,
    },

    text: {
        color: '#FFF0E5',
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize:28, 
        textTransform:'uppercase', 
    },

    terms: {
        color: '#FFD300',
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize:12, 
        marginTop: 70,
    }

 

});