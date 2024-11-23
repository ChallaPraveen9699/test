import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const data = [
  // { id: 1, image: 'https://example.com/image1.jpg', text: 'Image 1' },
  {
    id: 1,
    text: 'Off White Organza Ilk With Embroidery Thread + Sequence Butti Work Saree',
    price: '1,499',
    image: 'https://subhvastra.in/cdn/shop/files/A17_8290-Edit_600x.jpg?v=1691065881'
  },

  {
    id: 2,
    text: 'White georgette thread sequence work saree with heavy designer blouse',
    price: '1,599',
    image: 'https://subhvastra.in/cdn/shop/files/12_3bffa737-5ccd-46fb-bdc3-93e642d7b080_400x.png?v=1691579645'
  },
  {
    id: 3,
    text: 'White and skyblue shaded georgette mukesh work designer saree',
    price: '1,699',
    image: 'https://subhvastra.in/cdn/shop/files/white-net-heavy-sequence-thread-work-wedding-saree-10327-1200x1200h_400x.webp?v=1692864834'
  },
  {
    id: 4,
    text: 'White Color Party Wear Heavy Ruffle Celebrity Saree',
    price: '2,270',
    image: 'https://subhvastra.in/cdn/shop/files/19308_400x.jpg?v=1692867707'
  },


  {
    id: 5,
    text: 'Designer Black Sequins Saree With Unstitched Blouse',
    price: '1,499',
    image: 'https://subhvastra.in/cdn/shop/files/WhatsAppImage2023-12-17at11.43.21AM_400x.jpg?v=1712556261'
  },
  {
    id: 6,
    text: 'Designer Black Sequins Saree With Unstitched Blouse',
    price: '1,499',
    image: 'https://subhvastra.in/cdn/shop/files/A17_8290-Edit_600x.jpg?v=1691065881'
  },

];

const App = ({ navigation }) => {
  const [isRowLayout, setIsRowLayout] = useState(1);
  const [bgColor, setBgColor] = useState('white'); // Initial color

  const handlePress = () => {
    // Toggle between two colors
    setBgColor(prevColor => (prevColor === 'white' ? '#2ecc71' : 'white'));
  };
  // Function to toggle layout
  const toggleLayout = () => {
    setIsRowLayout(!isRowLayout);
  };

  const renderItem = ({ item }) => (
    <View style={isRowLayout == 1 ? styles.rowItem : styles.gridItem}>
      <Image source={{ uri: item.image }} style={styles.image} />
      {isRowLayout && <Text style={styles.text} >{item.text}</Text>}
    </View>
  );

  return (
    <View style={styles.container}>

      {/* // navigate to myntra */}
      <View style={{ flexDirection: 'row', padding: 4, borderWidth: 1, borderColor: '#000', alignSelf: 'flex-end' }}>
        <TouchableOpacity onPress={() => setIsRowLayout(1)} 
                style={{ padding: 3, borderWidth: 1, borderColor: '#000', 
                backgroundColor: isRowLayout == 1 ? 'blue' : '#fff' }}>
          <View style={{ height: 10, width: 10, borderWidth: 1, borderColor: '#000', backgroundColor: '#fff' }}></View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsRowLayout(2)} 
                style={{ flexDirection: 'row', padding: 3, borderWidth: 1,
                         borderColor: '#000', marginLeft: 6,
                         backgroundColor: isRowLayout == 2 ? 'blue' : '#fff' }}>
          <View style={{ height: 10, width: 10, borderWidth: 1, borderColor: '#000', backgroundColor: '#fff' }}></View>
          <View style={{ height: 10, width: 10, borderWidth: 1, borderColor: '#000', marginLeft: 3, backgroundColor: '#fff' }}></View>
        </TouchableOpacity>
      </View>
      <View style={{borderWidth:1,alignItems:'center', width:90,height:50 }}>
      <TouchableOpacity onPress={() => navigation.navigate('myntra')} style={{ padding: 10 }}>
          <Text style={{ fontSize:16}}>Myntra</Text>
      </TouchableOpacity>
      </View>
      {/* Change the key prop to force re-render when switching layout */}
      <View style={{padding:10}}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        numColumns={isRowLayout} // Grid when layout is not row
        key={isRowLayout}
        renderItem={renderItem}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  gridItem: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default App;