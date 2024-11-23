import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal,Image, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false); // For handling modal visibility

  return (
    <View style={{ flex: 1 }}>
      {/* MapView displaying a marker */}
      <MapView
        // style={{ ...StyleSheet.absoluteFillObject }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="My Marker"
          description="This is a description of the marker"
        />
      </MapView>

      {/* Overlay Views - Single Row */}
      <View
        style={{
          position: 'absolute',
          // backgroundColor: 'rgba(255, 0, 0, 0.8)', // Semi-transparent red background
          top: 10,
          left: 0,
          right: 5,
          padding: 2,
          borderRadius: 5,
          flexDirection: 'row', // Ensures all icons and elements are in a single row
          justifyContent: 'space-around', // Spread items evenly
          alignItems: 'center', // Vertically center the icons
        }}
      >
        {/* Menu Icon and Modal */}
      <View style={{ borderRadius:9,borderWidth:1,
      flexDirection:'row',width:130,alignItems:'center'}}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Entypo name="menu" size={20} color="black" />
        </TouchableOpacity>

        {/* Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View
            style={{
              flex: 1,
              // justifyContent: 'center',
              backgroundColor: 'white', // Semi-transparent background
              padding: 20,
              width: '60%',
              height: '100%',
            }}
          >
           <View style={{flexDirection:'row',backgroundColor:'#ddd'}}>
            <Image style={{width:150,height:25,padding:5}} source={{uri:'https://www.google.com/images/branding/lockups/2x/lockup_maps_color_131x24dp.png'}}/>
           <View style={{alignItems:'center',}}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{ color: 'blue',fontSize:25}}>X</Text>
            </TouchableOpacity>
            </View>
          </View>
          <View>
          <Text>Saved</Text>
          <Text>Saved</Text>
          <Text>Saved</Text>
          <Text>Saved</Text>
          </View>
          </View>
        </Modal>

        {/* Search Input */}
        <View style={{ flex: 1,flexDirection:'row',
                      alignItems:'center', marginRight: 15 }}>
          <TextInput
            placeholder="Searching Google Maps"
            style={{
            }}
          />
        <EvilIcons name="search" size={25} color="black" />

        </View>

        {/* Search Icon */}

        {/* Directions Icon */}
        <TouchableOpacity>
          <FontAwesome5 name="directions" size={20} style={{color:'blue',padding:5}} />
        </TouchableOpacity>
      </View>

        {/* Restaurant */}
        <View style={{ alignItems: 'center' ,height:25, width:60,justifyContent:'center',  borderColor: '#ccc',backgroundColor:'white',flexDirection:'row',borderWidth:1,borderRadius:18}}>
          <MaterialIcons name="restaurant" size={10} color="black" />
          <Text style={{ color: 'black', fontSize:  11,padding:2 }}>Restaurant</Text>
        </View>

        {/* Hotel */}
        <View style={{ alignItems: 'center' ,height:25, width:50,justifyContent:'center',  borderColor: '#ccc',backgroundColor:'white',flexDirection:'row',borderWidth:1,borderRadius:18}}>
          <FontAwesome name="hotel" size={10} color="black" />
          <Text style={{ color: 'black', fontSize: 11,padding:2 }}>Hotel</Text>
        </View>

        {/* Photography */}
        <View style={{ alignItems: 'center' ,height:25, width:50,justifyContent:'center',  borderColor: '#ccc',backgroundColor:'white',flexDirection:'row',borderWidth:1,borderRadius:18}}>
          <FontAwesome name="photo" size={10} color="black" />
          <Text style={{ color: 'black', fontSize: 11,padding:2 }}>Photo</Text>
        </View>

        {/* Other Icons */}
        <MaterialCommunityIcons name="dots-grid" size={18} color="black" />
        <Entypo name="mail-with-circle" size={18} color="black" />
      </View>
    </View>
  );
};

export default App;
