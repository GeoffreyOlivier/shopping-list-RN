import React, { useState} from "react";
import {StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';


const AddProduct = ({addProduct}) => {

    const [product, setProduct] = useState('');

    const inputHandler = (enteredText) => {
        setProduct(enteredText);
    }

    const handleClick = () => {
        addProduct(product);
        setProduct('');
    }

    return (
        <View style={styles.inputContainer} >
            <TextInput
                style={styles.textInput}
                placeholder="Nouveau produit"
                onChangeText={inputHandler}
                value={product}
            />
            <Button
                title="Valider"
                onPress={ handleClick }
            />
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

export default AddProduct;