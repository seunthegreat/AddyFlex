import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import {colors, font} from '../styles/base'

const Header = ({
    title,
}) => (
    <View style = {styles.container}>
        <Text style = {{color:'white', fontSize: font.md }}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: 70,
        backgroundColor:colors.primary,
        width: '100%',
        justifyContent: 'center',
        alignItems:'center'
    }
})

export default Header;
