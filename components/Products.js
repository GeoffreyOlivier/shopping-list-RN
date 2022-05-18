import React, { useState} from "react";
import {StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';

const Products = ({name}) => {
   return (
       <View>
           <Text style={styles.element}>{name}</Text>
       </View>
   )


}

const styles = StyleSheet.create({
    container: {
        padding: 50,
        paddingTop: 60
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 5,
        paddingLeft: 9,
        fontSize: 18,
        flexGrow: 1
    },
    item: {
        marginTop: 20,
    },
    element: {
        backgroundColor: '#ccc',
        padding: 10,
        margin: 5,
        fontSize: 18
    }
});

export default Products;
