import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = ({ navigation }) => {
  // Define initial state for fruitsList and carsList arrays
  const [fruitsList, setFruitsList] = useState(["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"]);
  const [carsList] = useState(["Saab", "Volvo", "BMW"]);

  // State to store the selected fruit and concatenated children
  const [selectedFruit, setSelectedFruit] = useState(fruitsList[2]); // Set initial fruit to "Apple"
  const [children, setChildren] = useState([]);
  const [copiedFruits, setCopiedFruits] = useState([]); // State to hold the result of copyWithin

  // Render each fruit in the FlatList
  const renderFruitItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleFruitSelect(item)} style={{ padding: 10, marginVertical: 5, backgroundColor: '#f0f0f0', borderRadius: 5 }}>
      <Text style={{ fontSize: 16 }}>{item}</Text>
    </TouchableOpacity>
  );

  // Render each car in the FlatList
  const renderCarItem = ({ item }) => (
    <TouchableOpacity style={{ padding: 10, marginVertical: 5, backgroundColor: '#e0e0e0', borderRadius: 5 }}>
      <Text style={{ fontSize: 16 }}>{item}</Text>
    </TouchableOpacity>
  );

  // Function to handle fruit selection
  const handleFruitSelect = (fruit) => {
    console.log('Selected fruit before change:', selectedFruit);
    setSelectedFruit(fruit);
    console.log('Selected fruit after change:', fruit);
  };

  // Function to concatenate arrays and update the children state
  const concatenateArrays = () => {
    const arr1 = ["Cecilie", "Lone"];
    const arr2 = ["Emil", "Tobias", "Linus"];
    const arr3 = ["Robin"];

    console.log('Arrays before concatenation:', arr1, arr2, arr3);

    const combinedChildren = arr1.concat(arr2, arr3);
    console.log('Children after concatenation:', combinedChildren);

    setChildren(combinedChildren);
  };

  // Function to use copyWithin on the fruitsList
  const useCopyWithin = () => {
    const newFruits = [fruitsList]; // Create a copy of the fruitsList
    const copiedArray = newFruits.copyWithin(2, 0, 2); // Perform copyWithin operation
    console.log('Fruits before copyWithin:', fruitsList);
    console.log('Fruits after copyWithin:', copiedArray);
    setCopiedFruits(copiedArray); // Update the state with the new fruits
  };

  //

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', }}>
          <View style={{ flexDirection: 'row' }}>
            {/* Display the selected fruit */}
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Selected Fruit: {selectedFruit}</Text>

            {/* FlatList to display fruitsList */}
            <FlatList
              data={fruitsList}
              renderItem={renderFruitItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>

          {/* Spacer */}
          <View style={{}} />

          {/* Display Cars List */}
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Cars List:</Text>
          <FlatList
            data={carsList}
            renderItem={renderCarItem}
            keyExtractor={(item, index) => index.toString()}
          />

          {/* Button to concatenate arrays */}
          <Button title="Concatenate Arrays" onPress={concatenateArrays} />

          {/* Button to use copyWithin on fruitsList */}
          <Button title="Use copyWithin on Fruits" onPress={useCopyWithin} />

          {/* Display copied fruits */}
          <Text style={{ fontSize: 16 }}>Fruits after copyWithin: {copiedFruits.join(', ')}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('option')}
            style={{ width: 100, height: 40, justifyContent: 'center', backgroundColor: 'white' }}>
            <Text style={{ fontSize: 18 }}>list</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
