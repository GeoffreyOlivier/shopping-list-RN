import React, { useState} from "react";
import {StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';
import Products from './components/Products';
import AddProduct from './components/AddProduct';

export default function App() {

  const [myProduct, setMyProduct] = useState([]);

  const addProduct = (product) => {
    const idString = Date.now().toString();
     setMyProduct(currentMyProduct => [{key: idString, name: product }, ...currentMyProduct]);

  }
  return (
    <View style={styles.container}>
      <AddProduct addProduct={addProduct}/>
       <FlatList
         data={myProduct}
         renderItem={({item}) => <Products name={item.name}/>}
         />
    </View>
  );
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
