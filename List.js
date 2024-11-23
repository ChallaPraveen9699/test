// import React from "react";
import React, {useState} from 'react';

import { FlatList, Image, SafeAreaView,ScrollView,Text,
  SectionList,TouchableOpacity,View,Alert,Modal,Pressable } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const App =({navigation})=>{
  const Item = ({ item }) => {
  };
  const [modalVisible, setModalVisible] = useState(false);
  return(
    <SafeAreaView>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

      <View style={{ flexDirection: 'row', padding: 6, justifyContent: 'space-between', alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name={'arrowleft'} color={'black'} size={30} style={{}}/>
        </TouchableOpacity>
      <View>
          <Image source={require('./img/roundfp.png')}
            style={{ width: 35, height: 35 }} />
        </View>
          <Text style={{fontSize: 18,color:'#000'}}>Vivo T3X 5G</Text>
       <View>
        <AntDesign name={'search1'}  color={'black'}size={23} style={{}}/>
       </View>
       <View style={{}}>
          <AntDesign name={'shoppingcart'} color={'#000'} size={25} />
        </View>
        <Text style={{fontSize:20,color:'black'}}>Login</Text>
        {/* <Image width={50} height={50} source={{uri:'https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-ea579c.png'}}/>
      */}
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
        <View>
            <Octicons name={'sort-desc'} color={'black'} size={22}/>
          </View>
          {/* //sortby */}
          <View >
            <TouchableOpacity
              onPress={()=> setModalVisible(true)}>
            <Text style={{fontSize:20,color:'black'}}>SortBy</Text>
            </TouchableOpacity>
              <Modal animationType='slide' transparent={true} visible={modalVisible}
                          onRequestClose={()=>{ setModalVisible(false);}}>
                <View style={{flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',}}>
                <View style={{ width: 300,
                              padding: 20,
                              backgroundColor: 'white',
                              borderRadius: 10,
                              alignItems: 'center',
                             shadowColor: '#000',}}>
              <View style={{}}>
              <View style={{flexDirection:'row'}}>
                  <Octicons name='dot' style={{marginRight:5}} size={25}/>
                  <Text style={{marginBottom: 15,
                          textAlign: 'center',
                        fontSize: 18,
                         }}>Popular</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <Octicons name='dot' style={{marginRight:5}} size={25}/>
                  <Text style={{marginBottom: 15,
                          textAlign: 'center',
                        fontSize: 18,
                         }}>Low to High</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                  <Text style={{marginBottom: 15,
                          textAlign: 'center',
                        fontSize: 18,
                         }}>High to Low</Text>
                  <Octicons name='dot' style={{marginRight:5}} size={25}/>

                </View>
              </View>

            <TouchableOpacity
              style={{backgroundColor:'#f44336',padding:10,borderRadius:5,marginTop:15,}}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{color:'white',fontSize:16}}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
          </View>
        </Modal>
          </View>
     </View>
     <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
          <View>
            <SimpleLineIcons name={'equalizer'} color={'black'} size={15}/>
          </View>
          <View>
            <Text style={{fontSize:18,marginLeft:10,color:'black'}}>Filter</Text>
          </View>
      </View>
    </View>
  <View>
   <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      {/* Box 1: 5G with Signal Icon */}
      <View style={{width: 120,
            height: 70,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 10,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center'}}>
        <View style={{flexDirection: 'row',alignItems: 'center',}}>
          <Entypo name="bar-graph" color="#87CEEB" size={25} />
          <Text style={{fontSize: 14,color: '#333',marginLeft: 5, textAlign: 'center'}}>5G</Text>
        </View>
      </View>
{/* /// Shopping cart */}


<TouchableOpacity  onPress={() => navigation.navigate('shopping')}
                    style={{width: 120,
                    height: 70,
                    backgroundColor: '#ffffff',
                    borderWidth: 1,
                    borderColor: '#ddd',
                    borderRadius: 10,
                    padding: 10,
                    alignItems: 'center',
                    justifyContent: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 14,color: '#333',
                marginLeft: 5, textAlign: 'center'}}>SHOPING</Text>
        </View>
      </TouchableOpacity>

      <View
           style={{width: 120,
            height: 70,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 10,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MaterialIcons name="currency-rupee" color="green" size={25} />
          <Text style={{fontSize: 14,color: '#333',
                marginLeft: 5, textAlign: 'center'}}>Rs. 15000 - Rs. 20000</Text>
        </View>
      </View>

      {/* Box 3: Currency with New Launches */}
      <TouchableOpacity style={{width: 120,
            height: 70,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 10,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center',}}>
          <MaterialIcons name="currency-rupee" color="#87CEEB" size={25} />
          <Text style={{fontSize: 15, color: '#333', textAlign: 'center'}}>New Launches</Text>
        </View>
      </TouchableOpacity>
    </View>
    {/* ///mobile1 */}
    <View style={{
          backgroundColor: '#ffffff',
          borderWidth: 1,
          borderColor: '#ddd',
          alignItems: 'center',
          marginTop:20,
          justifyContent: 'center', backgroundColor:'#42f5f5'}} width={110} height={35}>
          <Text style={{color:'white'}}>BESTSELLER</Text>

    </View>
    {/* //best selling image and Data */}
    <View  style={{flexDirection:'row', justifyContent:'center'}}>
        <View>
          <Image  width={100} height={140}
              source={{
                uri: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/w/3/4/-original-imahyytukhkky5ew.jpeg?q=70&crop=false',
              }} />
        </View>
        <View>
          <View>
              <Text style={{color:'black',marginLeft:10,fontSize:14}}>vivo T3x 5G (Crimson Blise, 128 GB)</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,alignItems:'center'}}>
              <Ionicons name={'star'} size={14} color={'green'}/>
              <Ionicons name={'star'} size={14} color={'green'}/>
              <Ionicons name={'star'} size={14} color={'green'}/>
              <Ionicons name={'star'} size={14}color={'green'}/>
              <Ionicons name={'star-half'} size={20} color={'green'}/>
              <Text>(25,826)</Text>
              <Image width={120} height={35} source={{uri:'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png'} }/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',}}>
            <Text style={{color:'green',fontSize:20}}>25% off</Text>
            <Text style={{fontSize:18,textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}> 17,499 </Text>
            <Text style={{fontSize:18,color:'black'}} >₹12,999</Text>
          </View>
          <Text style={{color:'green',marginLeft:10}}>Save extra with combo offer</Text>
          <Text style={{fontSize:15,color:'black',marginLeft:10}}>Upto ₹7,950 Off on Exchanges</Text>
          <Text style={{fontSize:15,color:'black',marginLeft:10}}>Free delivery</Text>
          <Text style={{marginLeft:10}}>1 year warranty by vivo</Text>
        </View>
        <View>
           <EvilIcons name={'heart'} size={35}/>
        </View>
    </View>
    {/* //mobile RAM, ROM */}
    <View>
    <View style={{width: 200,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>4 GB RAM | 128 GB Storage</Text>
      </View>
    <View style={{flexDirection:'row',}}>
      <View style={{width: 250,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>17.07 cm (6.72 inch) Full HD+ Display</Text>
      </View>
      <View style={{width: 80,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10,
            marginLeft:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>600 mAh</Text>
      </View>
    </View>
    <View style={{flexDirection:'row'}}>
    <View style={{width: 120,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10,
           }}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>50MP + 2MP</Text>
      </View>
      <View style={{width: 150,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10,
            marginLeft:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>8MP Front Camera</Text>
      </View>
      </View>
      
    </View>
    {/* //mobile2 */}

    <View  style={{flexDirection:'row', justifyContent:'center',padding:15}}>
        <View>
          <Image  width={100} height={140}
              source={{
                uri: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/w/3/4/-original-imahyytukhkky5ew.jpeg?q=70&crop=false',
              }} />
        </View>
        <View>
          <View>
              <Text style={{color:'black',marginLeft:10,fontSize:14}}>vivo T3x 5G (Crimson Blise, 128 GB)</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,alignItems:'center'}}>
              <Ionicons name={'star'} size={14} color={'green'}/>
              <Ionicons name={'star'} size={14} color={'green'}/>
              <Ionicons name={'star'} size={14} color={'green'}/>
              <Ionicons name={'star'} size={14}color={'green'}/>
              <Ionicons name={'star-half'} size={20} color={'green'}/>
              <Text>(74,015)</Text>
              <Image width={120} height={35} source={{uri:'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png'} }/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',}}>
            <Text style={{color:'green',fontSize:20}}>23% off</Text>
            <Text style={{fontSize:18,textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}> 18,999 </Text>
            <Text style={{fontSize:18,color:'black'}} >₹14,499</Text>
          </View>
          <Text style={{color:'green',marginLeft:10}}>Save extra with combo offer</Text>
          <Text style={{fontSize:15,color:'black',marginLeft:10}}>Upto ₹8,800 Off on Exchanges</Text>
          <Text style={{fontSize:15,color:'black',marginLeft:10}}>Free delivery</Text>
          <Text style={{marginLeft:10}}>1 year warranty by vivo</Text>
        </View>
        <View>
           <EvilIcons name={'heart'} size={35}/>
        </View>
    </View>
    {/* //mobile RAM, ROM */}
    <View>
    <View style={{width: 200,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>6 GB RAM | 128 GB Storage</Text>
      </View>
    <View style={{flexDirection:'row',}}>
      <View style={{width: 250,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>17.07 cm (6.72 inch) Full HD+ Display</Text>
      </View>
      <View style={{width: 80,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10,
            marginLeft:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>600 mAh</Text>
      </View>
    </View>
    <View style={{flexDirection:'row'}}>
    <View style={{width: 120,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10,
           }}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>50MP + 2MP</Text>
      </View>
      <View style={{width: 150,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10,
            marginLeft:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>8MP Front Camera</Text>
      </View>
      </View>
    </View>
    {/* //mobile3 */}
    <View  style={{flexDirection:'row', justifyContent:'center'}}>
        <View>
          <Image  width={100} height={140}
              source={{
                uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/k/g/j/t3x-5g-v2338-vivo-original-imahyyzaqhgwzfup.jpeg?q=70',
              }} />
        </View>
        <View>
          <View>
              <Text style={{color:'black',marginLeft:10,fontSize:14}}>vivo T3x 5G (Celestial Green, 128 GB)</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,alignItems:'center'}}>
              <Ionicons name={'star'} size={14} color={'green'}/>
              <Ionicons name={'star'} size={14} color={'green'}/>
              <Ionicons name={'star'} size={14} color={'green'}/>
              <Ionicons name={'star'} size={14}color={'green'}/>
              <Ionicons name={'star-half'} size={20} color={'green'}/>
              <Text>(25,826)</Text>
              <Image width={120} height={35} source={{uri:'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png'} }/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',}}>
            <Text style={{color:'green',fontSize:20}}>25% off</Text>
            <Text style={{fontSize:18,textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}> 17,499 </Text>
            <Text style={{fontSize:18,color:'black'}} >₹12,999</Text>
          </View>
          <Text style={{color:'green',marginLeft:10}}>Save extra with combo offer</Text>
          <Text style={{fontSize:15,color:'red',marginLeft:10}}>Only few left</Text>
          <Text style={{fontSize:15,color:'black',marginLeft:10}}>Free delivery</Text>
          <Text style={{marginLeft:10}}>1 year warranty by vivo</Text>
        </View>
        <View>
           <EvilIcons name={'heart'} size={35}/>
        </View>
    </View>
    {/* //mobile RAM, ROM */}
    <View>
    <View style={{width: 200,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>4 GB RAM | 128 GB Storage</Text>
      </View>
    <View style={{flexDirection:'row',}}>
      <View style={{width: 250,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>17.07 cm (6.72 inch) Full HD+ Display</Text>
      </View>
      <View style={{width: 80,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10,
            marginLeft:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>600 mAh</Text>
      </View>
    </View>
    <View style={{flexDirection:'row'}}>
    <View style={{width: 120,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10,
           }}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>50MP + 2MP</Text>
      </View>
      <View style={{width: 150,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10,
            marginLeft:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>8MP Front Camera</Text>
      </View>
      </View>
    </View>
        {/* //mobile 4 */}

    <View  style={{flexDirection:'row', justifyContent:'center',padding:15}}>
        <View>
          <Image  width={100} height={140}
              source={{
                uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/k/g/j/t3x-5g-v2338-vivo-original-imahyyzaqhgwzfup.jpeg?q=70',
              }} />
        </View>
        <View>
          <View>
              <Text style={{color:'black',marginLeft:10,fontSize:14}}>vivo T3x 5G (Crimson Blise, 128 GB)</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,alignItems:'center'}}>
              <Ionicons name={'star'} size={14} color={'green'}/>
              <Ionicons name={'star'} size={14} color={'green'}/>
              <Ionicons name={'star'} size={14} color={'green'}/>
              <Ionicons name={'star'} size={14}color={'green'}/>
              <Ionicons name={'star-half'} size={20} color={'green'}/>
              <Text>(74,015)</Text>
              <Image width={120} height={35} source={{uri:'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png'} }/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',}}>
            <Text style={{color:'green',fontSize:20}}>23% off</Text>
            <Text style={{fontSize:18,textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}> 18,999 </Text>
            <Text style={{fontSize:18,color:'black'}} >₹14,499</Text>
          </View>
          <Text style={{color:'green',marginLeft:10}}>Save extra with combo offer</Text>
          <Text style={{fontSize:15,color:'black',marginLeft:10}}>Upto ₹8,800 Off on Exchanges</Text>
          <Text style={{fontSize:15,color:'black',marginLeft:10}}>Free delivery</Text>
          <Text style={{marginLeft:10}}>1 year warranty by vivo</Text>
        </View>
        <View>
           <EvilIcons name={'heart'} size={35}/>
        </View>
    </View>
    {/* //mobile RAM, ROM */}
    <View>
    <View style={{width: 200,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>6 GB RAM | 128 GB Storage</Text>
      </View>
    <View style={{flexDirection:'row',}}>
      <View style={{width: 250,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>17.07 cm (6.72 inch) Full HD+ Display</Text>
      </View>
      <View style={{width: 80,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10,
            marginLeft:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>600 mAh</Text>
      </View>
    </View>
    <View style={{flexDirection:'row'}}>
    <View style={{width: 120,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10,
           }}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>50MP + 2MP</Text>
      </View>
      <View style={{width: 150,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10,
            marginLeft:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>8MP Front Camera</Text>
      </View>
      </View>
    </View>      
  </View>
  <View style={{backgroundColor:'#E3F4FC'}}>
    <View>
      <Text style={{color:'black',fontSize:16, padding:10}}>Which Network Type are you looking for ?</Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'center'}}>
    <View style={{width: 50,
            height: 35,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius:10,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10,
            marginLeft:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>5G</Text>
      </View>
      <View style={{width: 50,
            height: 35,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius:10,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10,
            marginLeft:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>4G</Text>
      </View>
      <View style={{width: 50,
            height: 35,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius:10,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10,
            marginLeft:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>2G</Text>
      </View>
      <View style={{width: 50,
            height: 35,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius:10,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10,
            marginLeft:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>3G</Text>
      </View>
    </View>
  </View>
  {/* image 5 */}
  <View>
    <View  style={{flexDirection:'row', justifyContent:'center',padding:15}}>
        <View>
          <Image  width={100} height={140}
              source={{
                uri: '  https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/k/g/j/t3x-5g-v2338-vivo-original-imahyyzaqhgwzfup.jpeg?q=70'}} />
        </View>
        <View>
          <View>
              <Text style={{color:'black',marginLeft:10,fontSize:14}}>vivo T3x 5G (Crimson Blise, 128 GB)</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,alignItems:'center'}}>
              <Ionicons name={'star'} size={14} color={'green'}/>
              <Ionicons name={'star'} size={14} color={'green'}/>
              <Ionicons name={'star'} size={14} color={'green'}/>
              <Ionicons name={'star'} size={14}color={'green'}/>
              <Ionicons name={'star-half'} size={20} color={'green'}/>
              <Text>(74,015)</Text>
              <Image width={120} height={35} source={{uri:'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png'} }/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',}}>
            <Text style={{color:'green',fontSize:20}}>23% off</Text>
            <Text style={{fontSize:18,textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}> 18,999 </Text>
            <Text style={{fontSize:18,color:'black'}} >₹14,499</Text>
          </View>
          <Text style={{color:'green',marginLeft:10}}>Save extra with combo offer</Text>
          <Text style={{fontSize:15,color:'black',marginLeft:10}}>Upto ₹8,800 Off on Exchanges</Text>
          <Text style={{fontSize:15,color:'black',marginLeft:10}}>Free delivery</Text>
          <Text style={{marginLeft:10}}>1 year warranty by vivo</Text>
        </View>
        <View>
           <EvilIcons name={'heart'} size={35}/>
        </View>
    </View>
    {/* //mobile RAM, ROM */}
    <View>
    <View style={{width: 200,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>6 GB RAM | 128 GB Storage</Text>
      </View>
    <View style={{flexDirection:'row',}}>
      <View style={{width: 250,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>17.07 cm (6.72 inch) Full HD+ Display</Text>
      </View>
      <View style={{width: 80,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10,
            marginLeft:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>600 mAh</Text>
      </View>
    </View>
    <View style={{flexDirection:'row'}}>
    <View style={{width: 120,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10,
           }}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>50MP + 2MP</Text>
      </View>
      <View style={{width: 150,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10,
            marginLeft:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>8MP Front Camera</Text>
      </View>
      </View>
    </View>
{/* //mobile 6 */}
    <View  style={{flexDirection:'row', justifyContent:'center'}}>
        <View>
          <Image  width={100} height={140}
              source={{
                uri: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/w/3/4/-original-imahyytukhkky5ew.jpeg?q=70&crop=false',
              }} />
        </View>
        <View>
          <View>
              <Text style={{color:'black',marginLeft:10,fontSize:14}}>vivo T3x 5G (Celestial Green, 128 GB)</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,alignItems:'center'}}>
              <Ionicons name={'star'} size={14} color={'green'}/>
              <Ionicons name={'star'} size={14} color={'green'}/>
              <Ionicons name={'star'} size={14} color={'green'}/>
              <Ionicons name={'star'} size={14}color={'green'}/>
              <Ionicons name={'star-half'} size={20} color={'green'}/>
              <Text>(25,826)</Text>
              <Image width={120} height={35} source={{uri:'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png'} }/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',}}>
            <Text style={{color:'green',fontSize:20}}>25% off</Text>
            <Text style={{fontSize:18,textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}> 17,499 </Text>
            <Text style={{fontSize:18,color:'black'}} >₹12,999</Text>
          </View>
          <Text style={{color:'green',marginLeft:10}}>Save extra with combo offer</Text>
          <Text style={{fontSize:15,color:'red',marginLeft:10}}>Only few left</Text>
          <Text style={{fontSize:15,color:'black',marginLeft:10}}>Free delivery</Text>
          <Text style={{marginLeft:10}}>1 year warranty by vivo</Text>
        </View>
        <View>
           <EvilIcons name={'heart'} size={35}/>
        </View>
    </View>
    {/* //mobile RAM, ROM */}
    <View>
    <View style={{width: 200,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>4 GB RAM | 128 GB Storage</Text>
      </View>
    <View style={{flexDirection:'row',}}>
      <View style={{width: 250,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>17.07 cm (6.72 inch) Full HD+ Display</Text>
      </View>
      <View style={{width: 80,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10,
            marginLeft:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>600 mAh</Text>
      </View>
    </View>
    <View style={{flexDirection:'row'}}>
    <View style={{width: 120,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10,
           }}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>50MP + 2MP</Text>
      </View>
      <View style={{width: 150,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10,
            marginLeft:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>8MP Front Camera</Text>
      </View>
      </View>
    </View>
  </View>

  <View style={{flex:1,justifyContent:'center'}}>
    <View style={{borderWidth:1,height:102,padding:25,marginBottom:20,width:150,marginLeft:100}}>
      <View style={{
              height:50,
              width:30,
              // borderWidth:1,
              // borderTopEndRadius:20,
              borderTopStartRadius:30,
              borderBottomLeftRadius:30,
              borderBottomWidth:1,
              borderTopWidth:1,
              borderLeftWidth:1,
              right:-0.01,
              backgroundColor:'#fff',
              marginLeft:95,
            }}>

      </View>
    </View>
  </View>
  <TouchableOpacity    onPress={() => navigation.navigate('movie')} 
            style={{width: 150,
            height: 40,
            backgroundColor: '#ffffff',
            borderWidth: 1,
            borderColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:10,
            marginLeft:10}}>
          <Text style={{fontSize: 14,marginLeft: 5, textAlign: 'center'}}>MOVIE TICKETS</Text>
  </TouchableOpacity>
  <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={{backgroundColor:'#f9c2ff',padding:20,marginVertical:8}}>
          <Text style={{fontSize:25}}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={{fontSize:35,backgroundColor:'#fff'}}>{title}</Text>
      )}
    />
 


 {/* //// */}


  
</ScrollView>
</SafeAreaView>
  )
}
export default App