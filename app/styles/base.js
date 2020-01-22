import React, { Component } from 'react';
import { Dimensions } from 'react-native';

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width
}

export const colors = {
    primary: '#17519d',
    secondary: 'red',
    button: 'black', 
    background: '#EEEEEE'
}

export const padding = {
    sm : 10,
    md : 20,
    lg : 30,
    xl : 40
}

export const font = {
    sm : 12,
    md : 18,
    lg : 28,
    family: 'Gill Sans',
}
