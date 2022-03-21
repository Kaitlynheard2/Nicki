import * as React from 'react';
import { Text, View, StyleSheet, Pressable, Image} from 'react-native';
import Constants from 'expo-constants';
import { Card, Title, Paragraph } from 'react-native-paper';

const calendarImg = require("../assets/images/calendar.png")
const leftArrow = require("../assets/images/leftArrow.png")
const rightArrow = require("../assets/images/rightArrow.png")
export function Calendar () {
  return (
    <View style={styles.container}>
    <Text style={styles.h1}>March</Text>
    <View style={styles.buttonWrapper}>
    <Pressable style={styles.button}><Image source={leftArrow} /></Pressable>
    <Pressable style={styles.button}><Image source={rightArrow} /></Pressable>
    </View>
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

  button: {
    flex:1,
    alignItems: "center",
    backgroundColor:"#EBF3FA",
    fontSize:50,
    padding:10,
    borderWidth:2,
    borderBottomWidth:0,
    borderRightWidth:0,
    borderColor:'rgba(255,255,255,0.4)',
    borderRadius:16,
    rowgGap:50,
    shadowColor: '#88A5BF',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  
  buttonWrapper: {
    flexDirection:'row',
    rowGap:50,
  }

});

