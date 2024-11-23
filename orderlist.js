import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
    const [rating, setRating] = useState(0); // State for rating

    const handleStarPress = (value) => {
        setRating(value); // Update rating when a star is pressed
    }
    return (
        <SafeAreaView style={{ justifyContent: 'space-around', padding: 10, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* <Text style={{fontSize:25,color:'blue'}}>Praveen</Text> */}
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity >
                        <AntDesign name='arrowleft' size={25} color={'black'} />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ fontSize: 20, color: 'black', marginLeft: 10 }}>Order Details</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <AntDesign name='search1' size={25} color={'black'} />
                    </View>
                    <View>
                        <AntDesign name='shoppingcart' size={25} style={{ color: 'black', marginLeft: 10 }} color={'black'} />
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: '#ddd', width: '100%', height: 3, marginVertical: 10 }} />
            <View>
                <Text style={{ fontSize: 12 }}> Order ID - OD432575732941156100</Text>
            </View>
            {/* //underline */}
            <View style={{ backgroundColor: '#ddd', width: '100%', height: 1.5, marginVertical: 10 }} />
            <View style={{ padding: 5, flexDirection: 'row', alignItems: 'center' }}>
                <View>
                    <View>
                        <Text style={{ fontSize: 16, color: 'black' }}>MUUCHSTAC Ocean for</Text>
                        <Text style={{ fontSize: 16, color: 'black' }}>Men, Fights Acne & Pimple...</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 14, marginTop: 10 }}>Seller: Muuchstacindia</Text>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 3 }}>
                        <View>
                            <Text style={{ fontSize: 14, color: 'black' }}>₹ 267</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, color: 'green' }}> 2 offers</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Image style={{ width: 70, height: 120, marginLeft: 50, backgroundColor: 'red' }}
                        source={{ uri: 'https://m.media-amazon.com/images/I/71M33O0-KyL._AC_UL480_FMwebp_QL65_.jpg' }} />
                </View>
            </View>
            <View style={{ backgroundColor: '#ddd', width: '100%', height: 1.5, marginVertical: 10 }} />
            <View style={{ flexDirection: 'row', }}>
                <View style={{ marginTop: 4 }}>
                    <AntDesign name="checkcircle" size={22} color={'green'} />
                    <View style={{
                        width: 2, backgroundColor: 'green', borderWidth: 1,
                        marginTop: 2, height: '20%', marginHorizontal: 10,
                        marginBottom: 2
                    }} />
                    <AntDesign name="checkcircle" size={22} color={'green'} />
                </View>
                <View style={{ marginLeft: 15 }}>
                    <Text style={{ fontSize: 14, color: 'black', marginTop: 5 }}>Order Confirmed, Oct 14</Text>
                    <Text style={{ marginTop: 45, color: 'black', fontSize: 14 }}>Delivered, Oct 18</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 25 }}>
                <View>
                    <Text style={{ color: 'blue', fontSize: 14 }}>See all Updates</Text>
                </View>
                <AntDesign name='right' size={20} color={'blue'} />
            </View>
            <View style={{ marginTop: 15, flexDirection: 'row' }}>
                <Text style={{ color: 'black', fontSize: 14 }}>Product has no-return policy </Text>
                <Text style={{ color: 'blue', fontSize: 14 }}>Know more</Text>
            </View>

            <View style={{
                flexDirection: 'row', borderColor: '#ddd',
                marginTop: 14, height: 70,
                elevation: 3,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View>
                    <Ionicons name='chatbubbles-outline' style={{ color: 'black', marginTop: 15, }} size={25} />
                </View>
                <View>
                    <Text style={{ fontSize: 16, color: 'black', marginTop: 15, marginLeft: 6, fontWeight: 'bold' }}>Chat with us</Text>
                </View>
            </View>

            <View>
                <Text style={{ fontSize: 14, marginTop: 10 }}>Rate your experience</Text>
            </View>
            <View style={{ backgroundColor: '#ddd', width: '100%', height: 1.5, marginVertical: 10 }} />
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Fontisto name='shopping-bag' size={20} />
                </View>
                <View>
                    <Text style={{ fontSize: 14, color: 'black', marginLeft: 9 }}>Rate the product</Text>
                </View>
            </View>
            {/* <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#ddd',height:80,width:'90%',marginLeft:20,borderRadius:10,justifyContent:'center'}}>
    <AntDesign name='staro' size={27} color={'black'}/>
    <AntDesign name='staro' size={27} color={'black'}/>
    <AntDesign name='staro' size={27} color={'black'}/>
    <AntDesign name='staro' size={27} color={'black'}/>
    <AntDesign name='staro' size={27} color={'black'}/>
</View> */}


            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#ddd',
                height: 80,
                width: '90%',
                marginLeft: 20,
                borderRadius: 10,
                justifyContent: 'center',
            }}>
                {Array(5).fill().map((_, index) => (
                    <TouchableOpacity key={index} onPress={() => handleStarPress(index + 1)}>
                        <AntDesign
                            name={rating > index ? 'star' : 'staro'}
                            size={27}
                            color={rating > index ? 'green' : 'black'}
                        />
                    </TouchableOpacity>
                ))}
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                    <MaterialCommunityIcons name='truck-outline' size={25} />
                </View>
                <View>
                    <Text style={{ fontSize: 14, color: 'black', }}> How was your delivery experience ?</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                    <AntDesign name='right' size={20} style={{ color: 'black' }} />
                </View>
            </View>


        </SafeAreaView>
    )
}
export default App