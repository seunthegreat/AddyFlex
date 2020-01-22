import React, {Component} from 'react';
import { View, Text,SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import {colors} from '../styles/base'

//All Home related screens are imported here
import Dashboard from '../screens/Dashboard/Main'

//All Account related screens are imported here
import Account from '../screens/Account/Main'
import AccountDetails from '../screens/Account/more'

//All Trading  related screens are imported here
import TradingViews from '../screens/Trade/Main'
import DetailsScreen from '../screens/Trade/more'

//All Tips and Financial related screens are imported here
import AddyTips from '../screens/AddyTips/Main'
import More from '../screens/AddyTips/more'


export default class Router extends Component {
    render() {
      return <AppContainer />;
    }
  }

const DashboardNavigator = createStackNavigator(
  {
    'Dashboard': Dashboard,
    Details: DetailsScreen,
  }, 
  
{
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: colors.primary,
    },
  },
  navigationOptions: {
    tabBarLabel: 'Home',
  },
}
) 

const AccountNavigator = createStackNavigator(
  {
    'Account': Account,
     'More': AccountDetails,
  }, 
  
{
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: colors.primary,
    },
  },
}
)  

const TradingIdeaNavigator = createStackNavigator(
    {
      'Trading Ideas': TradingViews,
      Details: DetailsScreen,
    }, 
    
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: colors.primary,
      },
    },
    navigationOptions: {
      tabBarLabel: 'Trading Ideas',
    },
  }
  );

  const AddyTipsNavigator = createStackNavigator(
    {
      'AddyTips': AddyTips,
      Details: More,
    }, 
    
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: colors.primary,
      },
    },
    navigationOptions: {
      tabBarLabel: 'AddyTip',
    },
  }
  );

   
const AppRouter = createBottomTabNavigator({
  Home : DashboardNavigator,
  Account : AccountNavigator,
  AddyTips : AddyTipsNavigator,
  'Trade Ideas' : TradingIdeaNavigator
})


const AppContainer = createAppContainer(AppRouter);



