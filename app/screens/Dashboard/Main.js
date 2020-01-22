import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/header'
import {dimensions, padding, font, colors} from '../../styles/base'


import Transaction from '../../components/transactionSummary'
import InvestmentPlans from '../../components/investmentPlans'
import DailyEarnings from '../../components/dailyEarnings'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.container}>

        <ScrollView style = {{padding:padding.sm}}>


            <DailyEarnings />

            <InvestmentPlans />
            
            <Transaction />

        </ScrollView>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        height: dimensions.fullHeight,
        width: dimensions.fullWidth,
        backgroundColor: colors.background
    }
})
