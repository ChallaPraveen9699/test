import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const SquareRoots = () => {
  const [roots, setRoots] = useState([]);
  const numbers = [4, 9, 16, 25,];
  const [fruits, setFruits] = useState(["Banana", "Apple", "Grapes", "Orange"]);

  const addFruits = () => {
    setFruits([...fruits, "Kiwi"]); // Corrected spread to add "Kiwi"
  };

  const calculateSquareRoots = () => {
    const squareRoots = numbers.map(Math.sqrt);
    setRoots(squareRoots);
  };

  const reverseFruits = () => {
    setFruits([...fruits].reverse());
  };

  const removeCitrusFruits = () => {
    setFruits(fruits.slice(0, 1).concat(fruits.slice(3))); // Excludes "Apple" and "Grapes"
  };

  const sortFruits = () => {
    setFruits([...fruits].sort()); // Sort the fruits array
  };

  return (
    <View>
      <View style={{ padding: 20 }}>
        <Button title="Calculate Square Roots" onPress={calculateSquareRoots} />
        {roots.length > 0 && (
          <Text style={{ marginTop: 20 }}>
            Square Roots: {roots.join(", ")}
          </Text>
        )}
      </View>

      <View style={{ padding: 20 }}>
        <Button title="Add Kiwi" onPress={addFruits} />
        <Text>Fruits: {fruits.join(', ')}</Text>
      </View>

      <View style={{ padding: 20 }}>
        <Button title="Reverse" onPress={reverseFruits} />
        <Text style={{ marginTop: 10 }}>Reversed Fruits: {fruits.join(", ")}</Text>
      </View>

      <View style={{ padding: 20 }}>
        <Button title="Slice (Remove Citrus)" onPress={removeCitrusFruits} />
        <Text>Remaining Fruits: {fruits.join(", ")}</Text>
      </View>

      <View style={{ padding: 20 }}>
        <Button title="Sort Fruits" onPress={sortFruits} />
        <Text>Sorted Fruits: {fruits.join(", ")}</Text>
      </View>
    </View>
  );
};

export default SquareRoots;
