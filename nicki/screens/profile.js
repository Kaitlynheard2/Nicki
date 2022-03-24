import React, {useState}from 'react';
import { Text, View, StyleSheet, Button, Pressable, Switch } from 'react-native';
import Constants from 'expo-constants';
import { Card, Title, Paragraph } from 'react-native-paper';

export function Profile() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  return(
    <View style={styles.container}>
    <Text style={styles.h1}>Kaitlyn</Text>
    <Text style={styles.h2}>View Email</Text>
    <Pressable></Pressable>
    <Text style={styles.h2}>Change Password</Text>
    <Pressable></Pressable>
    <Text style={styles.h2}>Spending Limit</Text>
    <Pressable></Pressable>
    <Text style={styles.h2}>Notifications</Text>
    <View style={styles.toggleWrapper}>
    <Switch
        trackColor={{ false: "#c5d2d6", true: "#c5d2d6" }}
        thumbColor={isEnabled ? "#c5d2d6" : "#ffffff"}
        ios_backgroundColor="#c5d2d6"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    <View style={isEnabled ? styles.onCircleTrue: styles.onCircleFalse}></View>
    </View>
    <Pressable style={styles.button}><Text style={styles.h2}>Logout</Text></Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
   button: {
    alignItems: "center",
    justifyContent:'center',
    backgroundColor:"#EBF3FA",
    width:"90%",
    height:"7%",
    borderWidth:2,
    borderBottomWidth:0,
    borderRightWidth:0,
    borderColor:'rgba(255,255,255,0.4)',
    borderRadius:16,
    shadowColor: '#88A5BF',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },

  container: {
    flex:1,
    backgroundColor: "#EBF3FA",
    height:"100%"
  },

  h2: {
    fontSize:20,
  },

  h1: {
    fontSize:52,
  },

  onCircleTrue: {
    width:10,
    height:10,
    borderRadius:10/2,
    backgroundColor:'#12e03e',
    marginTop:5
  },

  onCircleFalse: {
    width:10,
    height:10,
    borderRadius:10/2,
    backgroundColor:'#c5d2d6',
    marginTop:5
  },
  toggleWrapper: {
    flexDirection:'row',
    gap:10
  }
  
});
