import React, { Component } from 'react';
import { View, Text,StyleSheet, ScrollView } from 'react-native';
import {dimensions, padding, font, colors} from '../styles/base'
import Button from '../components/white-btn'


export default class investments extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

    
      <View style = {styles.container}>
        <Text style = {{color:'white',alignSelf:'center' ,fontWeight: '500', fontSize: font.md}}> Minifx </Text>
        <Button title = "Make Investment" onClick = {() =>{alert("MiniFx Investment")}}/>
      </View>

      <View style = {styles.container}>
        <Text style = {{color:'white',alignSelf:'center' ,fontWeight: '500', fontSize: font.md}}> CrystalFx </Text>
        <Button title = "Make Investment" onClick = {() =>{alert("CrystalFx Investment")}}/>
      </View>

      <View style = {styles.container}>
        <Text style = {{color:'white',alignSelf:'center', fontWeight: '500', fontSize: font.md}}> RubyFx </Text>
        <Button title = "Make Investment" onClick = {() =>{alert("Ruby Investment")}}/>
      </View>

      <View style = {styles.container}>
        <Text style = {{color:'white',alignSelf:'center', fontWeight: '500', fontSize: font.md}}> GoldenFx </Text>
        <Button title = "Make Investment" onClick = {() =>{alert("GoldenFx Investment")}}/>
      </View>

      <View style = {styles.container}>
        <Text style = {{color:'white',alignSelf:'center', fontWeight: '500', fontSize: font.md}}> RoyalFx </Text>
        <Button title = "Make Investment" onClick = {() =>{alert("RoyalFx Investment")}}/>
      </View>

    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        height: dimensions.fullWidth/1.4,
        width: dimensions.fullWidth/1.2,
        backgroundColor: colors.primary, 
        margin: padding.sm, 
        justifyContent:'flex-end'
    }
})
