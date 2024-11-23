import React from "react";
import {
    SafeAreaView, View, Text, Image,
    FlatList, TouchableOpacity,
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const productlist = [
    {
        "id": 1,
        "name": "Top Offers",
        "image": 'https://rukminim1.flixcart.com/fk-p-flap/80/80/image/698ba0cebe456aaf.jpg?q=100'
    },
    {
        "id": 2,
        "name": "Mobiles & Tablets",
        "price": 199.99,
        "image": 'https://rukminim1.flixcart.com/fk-p-flap/80/80/image/44e10b16e649b691.jpg?q=100'
    },
    {
        "id": 3,
        "name": "TV &Appliance",
        "image": "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/717b5077a5e25324.jpg?q=100"
    },
    {
        "id": 4,
        "name": "Electronics",
        "price": 799.99,
        "image": "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/4da1d0d19350cc84.jpg?q=100"
    },
    {
        "id": 5,
        "name": "Fashion",
        "price": 249.99,
        "image": "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/9d4e9c605fc1d2d3.jpg?q=100"
    },
    {
        "id": 6,
        "name": "Grocery",
        "price": 24.99,
        "image": "https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100"
    },
    {
        "id": 7,
        "name": "Home & Furniture",
        "price": 899.99,
        "image": "https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100"
    },
    {
        "id": 8,
        "name": "Appliances",
        "price": 1199.99,
        "image": "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100"
    },
    {
        "id": 9,
        "name": "Flight Bookings",
        "price": 499.99,
        "image": "https://images.pexels.com/photos/164589/pexels-photo-164589.jpeg"
    },
    {
        "id": 10,
        "name": "Beauty, Toys & More",
        "price": 499.99,
        "image": "	https://www.istockphoto.com/photo/toy-teddy-bear-isolated-on-white-gm525900055-52226088?utm_campaign=srp_photos_noresults&utm_content=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Feddybear%2F&utm_medium=affiliate&utm_source=pexels&utm_term=eddybear"
    },
    {
        "id": 11,
        "name": "Two Wheelers",
        "price": 499.99,
        "image": "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100"
    },


]
const Bestelectronics = [
    {
        "id": 1,
        "name": "Gaming Console",
        "price": "Grab Now",
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/headphone/e/a/f/-original-imagtc44nk4b3hfg.jpeg"
    },
    {
        "id": 2,
        "name": "Noise Smartwatches",
        "price": 499.99,
        "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/j/s/h/-original-imah5asafnwhzudh.jpeg"
    }, {
        "id": 3,
        "name": "Monitors",
        "price": 6599,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/z/l/6/-original-imagze3c9aggznc9.jpeg"
    }, {
        "id": 4,
        "name": "Best Selling Mobile Speakers",
        "price": 499.99,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/speaker/mobile-tablet-speaker/p/p/3/jblflipes2-jbl-original-imaghhxczcphv48d.jpeg"
    }, {
        "id": 5,
        "name": "Printers",
        "price": 499.99,
        "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/printer/d/4/f/-original-imagtzvzgggbgqs6.jpeg"
    }, {
        "id": 6,
        "name": "Projector",
        "price": 499.99,
        "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/projector/p/q/v/2022-pp9-full-hd-1080p-projector-for-home-office-classroom-1080p-original-imah5f9jfdz2qn7e.jpeg"
    },
]
// let priceWithCurrency = price.map(price => '₹' + price);
const BeautyAndtoyproducts = [
    {
        "id": 1,
        "name": "Top Selling Stationery",
        "price": 49,
        "image": "https://rukminim2.flixcart.com/image/612/612/l3ys70w0/art-set/x/d/0/9000032121-luxor-original-imageyqwpzzdwgkb.jpeg"
    },
    {
        "id": 2,
        "name": "Remote Control Toys",
        "price": "Up to 80% Off",
        "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/2/9/3/3d-led-lighting-kids-high-speed-rechargeable-remote-control-car-original-imah3xsyapqvhyz4.jpeg"
    },
    {
        "id": 3,
        "name": "Soft Toys",
        "price": "Up to 70% Off",
        "image": "https://rukminim2.flixcart.com/image/612/612/knt7zbk0/stuffed-toy/1/2/d/grey-elephant-soft-toy-cum-baby-sleeping-pillow-stuffed-toys-original-imag2ehgz7zcxhz9.jpeg"
    },
    {
        "id": 4,
        "name": "String Instruments",
        "price": "Up to 70% Off",
        "image": "https://rukminim2.flixcart.com/image/612/612/kmf7ki80/acoustic-guitar/h/j/q/int-38c-bls-intern-original-imagfbn23r3vh7tq.jpeg"

    },
    {
        "id": 5,
        "name": "Non-Geared Cycles",
        "price": "Up to 40% Off",
        "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/cycle/x/a/n/legend-24t-bicycle-big-kids-boys-girls-9-to-15-age-24-16-east-original-imah4pg7k9ey46u6.jpeg"
    },
    {
        "id": 6,
        "name": "Musical Keyboards",
        "price": "Up to 70% Off",
        "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/musical-keyboard/a/z/d/37-0-45-37-keys-beston-original-imagyqf8tfvn9xzy.jpeg"
    },
    {
        "id": 7,
        "name": "Yoga Mat",
        "price": "From 159",
        "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/sport-mat/g/d/z/benefits-yoga-mat-6-24-quick-shel-72-original-imah4rkxavk2hbuh.jpeg"
    },
    {
        "id": 8,
        "name": "Best of Action Toys",
        "price": "Up to 70% Off",
        "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/action-figure/m/r/x/15-new-batman-super-hero-dark-knight-action-figure-dc-movie-original-imahybfsnguvrjhv.jpeg"
    },



]

const App = ({ navigation }) => {
    const Item = ({ item }) => {
    };

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between', alignItems: "center" }}>
                <TouchableOpacity>
                    <View style={{ marginLeft: 1 }}>
                        <Ionicons name={'menu'} color={'#000'} size={35}
                        />
                    </View>
                </TouchableOpacity>
                <View>
                    <Image source={require('./img/flipkart.png')}
                        style={{ width: 90, height: 35 }} />
                </View>
                <View style={{}}>
                    <AntDesign name={'mobile1'} color={'#000'} size={25} />
                </View>
                <View style={{}}>
                    <MaterialCommunityIcons name={'account-circle-outline'} color={'#000'} size={35} />
                </View>
                <Text style={{ fontSize: 25, textAlign: '' }}>LogIn</Text>
                <View style={{}}>
                    <AntDesign name={'shoppingcart'} color={'#000'} size={32} />
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={productlist}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('List')} style={{
                                padding: 10,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Image style={{
                                    height: 70, width: 70
                                }} source={{ uri: item.image }}
                                />
                                <Text>{item.name}</Text>

                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={item => item.id}
                />
            </View>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, color: 'black' }}>Beast Electronics</Text>
                    <AntDesign name={'rightcircle'} style={{ fontSize: 25, color: 'blue' }} />
                </View>

                <FlatList
                    data={Bestelectronics}
                    renderItem={({ item }) => {
                        // console.log(item1)
                        return (
                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                <Image style={{
                                    height: 70, width: 70,
                                }} source={{ uri: item.image }}
                                />
                                <View style={{ flexDirection: 'row', marginLeft: 15 }}>
                                    <View>
                                        <Text>{item.name}</Text>
                                        <Text> ₹{item.price}</Text>
                                    </View>
                                    <View >
                                        <AntDesign name={'right'} style={{ padding: 32, color: '#000', fontSize: 20, }} />
                                    </View>
                                </View>
                            </View>
                        )
                    }}
                    keyExtractor={item => item.id}
                />
                <Text color={'red'}>Praveen</Text>

            </View>
            <View></View>

            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, color: 'black' }}>Beauty, Food, Toys & more</Text>
                    <AntDesign name={'rightcircle'} style={{ fontSize: 25, color: 'blue' }} />
                </View>
                <View>
                    <FlatList
                        data={BeautyAndtoyproducts}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <Image style={{ backgroundColor: 'red' }} source={{ uri: item.image }} />
                                </View>
                            )
                        }}
                    />

                </View>
            </View>
        </SafeAreaView>
    )
}
export default App 