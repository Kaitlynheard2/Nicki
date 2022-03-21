import * as React from 'react';
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { Card, Title, Paragraph } from 'react-native-paper';

export function Dashboard () {
  return(
    <View style={styles.container}>
    <Text style={styles.h2}>Total Balance</Text>
    <TextInput></TextInput>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EBF3FA",
    height:"100%"
  },

  h1: {
    fontSize:52,
  },

  h2: {
    fontSize:20,
  },


  
});

