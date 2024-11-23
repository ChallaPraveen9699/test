import React from 'react';
import { SafeAreaView, FlatList, View, Text, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const Applist =[
  {
    id: 1,
    text: 'Butti',
    price: '1,009',
    image: 'https://subhvastra.in/cdn/shop/files/A17_8290-Edit_600x.jpg?v=1691065881'
  },
  {
    id: 2,
    text: 'blouse',
    price: '1,599',
    image: 'https://subhvastra.in/cdn/shop/files/12_3bffa737-5ccd-46fb-bdc3-93e642d7b080_400x.png?v=1691579645'
  },
  {
    id: 3,
    text: ' saree',
    price: '1,699',
    image: 'https://subhvastra.in/cdn/shop/files/white-net-heavy-sequence-thread-work-wedding-saree-10327-1200x1200h_400x.webp?v=1692864834'
  },
  {
    id: 4,
    text: 'White ',
    price: '2,270',
    image: 'https://subhvastra.in/cdn/shop/files/19308_400x.jpg?v=1692867707'
  },
  {
    id: 5,
    text: 'Designer',
    price: '1,499',
    image: 'https://subhvastra.in/cdn/shop/files/WhatsAppImage2023-12-17at11.43.21AM_400x.jpg?v=1712556261'
  },
  {
    id: 1,
    text: 'Butti',
    price: '1,009',
    image: 'https://subhvastra.in/cdn/shop/files/A17_8290-Edit_600x.jpg?v=1691065881'
  },
  {
    id: 2,
    text: 'blouse',
    price: '1,599',
    image: 'https://subhvastra.in/cdn/shop/files/12_3bffa737-5ccd-46fb-bdc3-93e642d7b080_400x.png?v=1691579645'
  },
  {
    id: 3,
    text: ' saree',
    price: '1,699',
    image: 'https://subhvastra.in/cdn/shop/files/white-net-heavy-sequence-thread-work-wedding-saree-10327-1200x1200h_400x.webp?v=1692864834'
  },
  {
    id: 4,
    text: 'White ',
    price: '2,270',
    image: 'https://subhvastra.in/cdn/shop/files/19308_400x.jpg?v=1692867707'
  },
  {
    id: 5,
    text: 'Designer',
    price: '1,499',
    image: 'https://subhvastra.in/cdn/shop/files/WhatsAppImage2023-12-17at11.43.21AM_400x.jpg?v=1712556261'
  },
  {
    id: 3,
    text: ' saree',
    price: '1,699',
    image: 'https://subhvastra.in/cdn/shop/files/white-net-heavy-sequence-thread-work-wedding-saree-10327-1200x1200h_400x.webp?v=1692864834'
  },
  {
    id: 4,
    text: 'White ',
    price: '2,270',
    image: 'https://subhvastra.in/cdn/shop/files/19308_400x.jpg?v=1692867707'
  },

 ];

const App = ({navigation}) => {
 
  const renderItem = ({ item }) => (
    <View style={{padding:5}}>
      <Image source={{ uri: item.image }} style={{width:60,height:30,backgroundColor:'blue',justifyContent:'space-between',}} />
      <Text style={{fontSize:16}} >{item.text}</Text>
    </View>
  
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{height:170}}>
      <Swiper
        style={{ padding:15,marginBottom:230,marginTop:25 }}
        showsButtons={true}
        autoplay={true}
        autoplayTimeout={5}
      >
        <View>
          <Image
            style={{ width: '100%', height: 170 }}
            source={{ uri: 'https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/0a4551c00143b344.jpg' }}
          />
        </View>
        <View>
          <Image
            style={{ width: '100%', height: 170 }}
            source={{ uri: 'https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/7af6aa615544c55e.jpg' }}
          />
        </View>
        <View>
          <Image
            style={{ width: '100%', height: 170 }}
            source={{ uri: 'https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/621e4a0557852319.jpeg' }}
          />
        </View>
        <View>
          <Image
            style={{ width: '100%', height: 170 }}
            source={{ uri: 'https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/ad56ce6fb4b5f843.jpg' }}
          />
        </View>
        <View>
          <Image
            style={{ width: '100%', height: 170 }}
            source={{ uri: 'https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/fc9f91894b836a04.jpg' }}
          />
        </View>
      </Swiper>
    </View>
{/* //to moving mobile-ui apps */}
<View style={{ height: '40%', width: '100%'}}>
        <Swiper style={{ padding:25}} 
                // showsButtons={true}
                 >
          <View style={{}}>
            <FlatList
              data={Applist} 
              renderItem={({ item }) => (
                <View style={{ padding: 16, alignItems: 'center' }}>
                  <Image style={{ width: 60, height: 45, borderRadius: 15, }} source={{ uri: item.image }} />
                  <Text style={{ fontSize: 16 }}>{item.text}</Text>
                </View>
              )}
              keyExtractor={item => item.id}
              numColumns={4} 
            />
          </View>
          <View>
            <FlatList
                data={Applist}
                renderItem={({item})=>(
                  <View style={{padding:16,alignItems:'center'}}> 
                    <Image style={{width:60,height:45,borderRadius:15}} source={{uri:item.image}}/>
                    <Text style={{fontSize:16,color:'blue'}}>{item.text}</Text>
                  </View>
                )}
                keyExtractor={item=>item.id}
                numColumns={4}
            />
          </View>
        </Swiper>
</View>

      <View style={{borderWidth:1,alignItems:'center', width:150,height:50 }}>
      <TouchableOpacity onPress={() => navigation.navigate('screen')} style={{ padding: 10 }}>
          <Text style={{ fontSize:16,marginLeft:10}}>MobileWindow</Text>
      </TouchableOpacity>
      </View>
      

     
      
    </SafeAreaView>
  );
};

export default App;
