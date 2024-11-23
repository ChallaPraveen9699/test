import React from 'react';
import { View, Text, Image, FlatList, ImageBackground, Touchable, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';




const AppImages = [
  {
    title: "app1",

    image: "https://rukminim2.flixcart.com/image/612/612/l3ys70w0/art-set/x/d/0/9000032121-luxor-original-imageyqwpzzdwgkb.jpeg"
  },
  {
    title: "app2",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/2/9/3/3d-led-lighting-kids-high-speed-rechargeable-remote-control-car-original-imah3xsyapqvhyz4.jpeg"
  }, {
    title: "app3",
    image: "https://rukminim2.flixcart.com/image/612/612/kmf7ki80/acoustic-guitar/h/j/q/int-38c-bls-intern-original-imagfbn23r3vh7tq.jpeg"
  }, {
    title: "app4",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/cycle/x/a/n/legend-24t-bicycle-big-kids-boys-girls-9-to-15-age-24-16-east-original-imah4pg7k9ey46u6.jpeg"
  }, {
    title: "app5",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/musical-keyboard/a/z/d/37-0-45-37-keys-beston-original-imagyqf8tfvn9xzy.jpeg"
  },
  {
    title: "app6",
    image: "https://rukminim2.flixcart.com/image/612/612/l3ys70w0/art-set/x/d/0/9000032121-luxor-original-imageyqwpzzdwgkb.jpeg"
  },
  {
    title: "app7",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/2/9/3/3d-led-lighting-kids-high-speed-rechargeable-remote-control-car-original-imah3xsyapqvhyz4.jpeg"
  }, {
    title: "app8",
    image: "https://rukminim2.flixcart.com/image/612/612/kmf7ki80/acoustic-guitar/h/j/q/int-38c-bls-intern-original-imagfbn23r3vh7tq.jpeg"
  }, {
    title: "app9",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/cycle/x/a/n/legend-24t-bicycle-big-kids-boys-girls-9-to-15-age-24-16-east-original-imah4pg7k9ey46u6.jpeg"
  }, {
    title: "app10",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/musical-keyboard/a/z/d/37-0-45-37-keys-beston-original-imagyqf8tfvn9xzy.jpeg"
  },
  {
    title: "app11",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/cycle/x/a/n/legend-24t-bicycle-big-kids-boys-girls-9-to-15-age-24-16-east-original-imah4pg7k9ey46u6.jpeg"
  }, {
    title: "app12",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/musical-keyboard/a/z/d/37-0-45-37-keys-beston-original-imagyqf8tfvn9xzy.jpeg"
  },
  // {
  //   title:"app13",

  //   image:"https://rukminim2.flixcart.com/image/612/612/l3ys70w0/art-set/x/d/0/9000032121-luxor-original-imageyqwpzzdwgkb.jpeg"
  // },
  // {
  //   title:"app14",
  //   image:"https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/2/9/3/3d-led-lighting-kids-high-speed-rechargeable-remote-control-car-original-imah3xsyapqvhyz4.jpeg"
  // }, {
  //   title:"app15",
  //   image:"https://rukminim2.flixcart.com/image/612/612/kmf7ki80/acoustic-guitar/h/j/q/int-38c-bls-intern-original-imagfbn23r3vh7tq.jpeg"
  // }, {
  //   title:"app16",
  //   image:"https://rukminim2.flixcart.com/image/612/612/xif0q/cycle/x/a/n/legend-24t-bicycle-big-kids-boys-girls-9-to-15-age-24-16-east-original-imah4pg7k9ey46u6.jpeg"
  // }, {
  //   title:"app17",
  //   image:"https://rukminim2.flixcart.com/image/612/612/xif0q/musical-keyboard/a/z/d/37-0-45-37-keys-beston-original-imagyqf8tfvn9xzy.jpeg"
  // },
  // {
  // title:"app18",
  // image:"https://rukminim2.flixcart.com/image/612/612/l3ys70w0/art-set/x/d/0/9000032121-luxor-original-imageyqwpzzdwgkb.jpeg"
  // },
  // {
  // title:"app19",
  // image:"https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/2/9/3/3d-led-lighting-kids-high-speed-rechargeable-remote-control-car-original-imah3xsyapqvhyz4.jpeg"
  // }, {
  // title:"app20",
  // image:"https://rukminim2.flixcart.com/image/612/612/kmf7ki80/acoustic-guitar/h/j/q/int-38c-bls-intern-original-imagfbn23r3vh7tq.jpeg"
  // }, {
  // title:"app21",
  // image:"https://rukminim2.flixcart.com/image/612/612/xif0q/cycle/x/a/n/legend-24t-bicycle-big-kids-boys-girls-9-to-15-age-24-16-east-original-imah4pg7k9ey46u6.jpeg"
  // }, {
  // title:"app22",
  // image:"https://rukminim2.flixcart.com/image/612/612/xif0q/musical-keyboard/a/z/d/37-0-45-37-keys-beston-original-imagyqf8tfvn9xzy.jpeg"
  // },
  // {
  // title:"app23",
  // image:"https://rukminim2.flixcart.com/image/612/612/xif0q/cycle/x/a/n/legend-24t-bicycle-big-kids-boys-girls-9-to-15-age-24-16-east-original-imah4pg7k9ey46u6.jpeg"
  // }, {
  // title:"app24",
  // image:"https://rukminim2.flixcart.com/image/612/612/xif0q/musical-keyboard/a/z/d/37-0-45-37-keys-beston-original-imagyqf8tfvn9xzy.jpeg"
  // },
  // {
  //   title:"app25",
  //   image:"https://rukminim2.flixcart.com/image/612/612/kmf7ki80/acoustic-guitar/h/j/q/int-38c-bls-intern-original-imagfbn23r3vh7tq.jpeg"
  //   }, {
  //   title:"app26",
  //   image:"https://rukminim2.flixcart.com/image/612/612/xif0q/cycle/x/a/n/legend-24t-bicycle-big-kids-boys-girls-9-to-15-age-24-16-east-original-imah4pg7k9ey46u6.jpeg"
  //   }, {
  //   title:"app27",
  //   image:"https://rukminim2.flixcart.com/image/612/612/xif0q/musical-keyboard/a/z/d/37-0-45-37-keys-beston-original-imagyqf8tfvn9xzy.jpeg"
  //   },
  //   {
  //   title:"app28",
  //   image:"https://rukminim2.flixcart.com/image/612/612/xif0q/cycle/x/a/n/legend-24t-bicycle-big-kids-boys-girls-9-to-15-age-24-16-east-original-imah4pg7k9ey46u6.jpeg"
  //   }, {
  //   title:"app29",
  //   image:"https://rukminim2.flixcart.com/image/612/612/xif0q/musical-keyboard/a/z/d/37-0-45-37-keys-beston-original-imagyqf8tfvn9xzy.jpeg"
  //   },
  //   {
  //     title:"app30",
  //     image:"https://rukminim2.flixcart.com/image/612/612/xif0q/musical-keyboard/a/z/d/37-0-45-37-keys-beston-original-imagyqf8tfvn9xzy.jpeg"
  //     },
  //     {
  //     title:"app31",
  //     image:"https://rukminim2.flixcart.com/image/612/612/xif0q/cycle/x/a/n/legend-24t-bicycle-big-kids-boys-girls-9-to-15-age-24-16-east-original-imah4pg7k9ey46u6.jpeg"
  //     }, {
  //     title:"app32",
  //     image:"https://rukminim2.flixcart.com/image/612/612/xif0q/musical-keyboard/a/z/d/37-0-45-37-keys-beston-original-imagyqf8tfvn9xzy.jpeg"
  //     },
]
const App = ({ navigation }) => {
  return (
    <View style={{ height: '100%', width: '100%', backgroundColor: 'gray' }}>
      <ImageBackground
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTR9XFZ0xrtPb-artWHL8KSPeXPo0nxQPnhUCtId2Uv68BxFlgVnuddFv5CTl0SOP9mAY&usqp=CAU' }}
        style={{ resizeMode: 'cover', flex: 1, justifyContent: 'center' }}
      >
        {/* //Navigate to calender component */}
        <View style={{ flexDirection: 'row', }}>
          <View style={{ padding: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate('calender')}
              style={{ width: 100, height: 40, justifyContent: 'center', backgroundColor: 'white' }}>
              <Text style={{ fontSize: 16, }}>Calender</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 10, alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('maps')}
              style={{ width: 100, height: 40, justifyContent: 'center', backgroundColor: 'white' }}>
              <Text style={{ fontSize: 16, }}>Maps</Text>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 10, alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('orderlist')}
              style={{ width: 100, height: 40, justifyContent: 'center', backgroundColor: 'white' }}>
              <Text style={{ fontSize: 18 }}>OrderList</Text>
            </TouchableOpacity>
          </View>
          </View>
      <View style={{flexDirection:'row'}}>
        <View style={{ padding: 10, alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('methods')}
            style={{ width: 112, height: 35, justifyContent: 'center', backgroundColor: 'white' }}>
            <Text style={{ fontSize: 18 }}>JSMETHODS</Text>
          </TouchableOpacity>
        </View>
        <View style={{ padding: 10, alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('camera')}
            style={{ width: 100, height: 40, justifyContent: 'center', backgroundColor: 'white' }}>
            <Text style={{ fontSize: 18 }}>CAMERA</Text>
          </TouchableOpacity>
        </View>
      </View>

        <Swiper style={{ padding: 18 }} >
          <View style={{ width: '100%', marginTop: 150, }}>
            <FlatList
              data={AppImages}

              renderItem={({ item }) => (
                <View style={{ padding: 16, alignItems: 'center' }}>
                  <Image style={{ width: 90, height: 90, borderRadius: 15, }} source={{ uri: item.image }} />
                  <Text style={{ fontSize: 16, color: 'white' }}>{item.title}</Text>
                </View>
              )}
              keyExtractor={item => item.id}
              numColumns={3}
            />
          </View>
          <View style={{ width: '100%', marginTop: 150, }}>
            <FlatList
              data={AppImages}
              renderItem={({ item }) => (
                <View style={{ padding: 16, alignItems: 'center' }}>
                  <Image style={{ width: 90, height: 90, borderRadius: 15, }} source={{ uri: item.image }} />
                  <Text style={{ fontSize: 16, color: 'white' }}>{item.title}</Text>
                </View>
              )}
              keyExtractor={item => item.id}
              numColumns={3}
            />
          </View>
          <View style={{ width: '100%', marginTop: 150, }}>
            <FlatList
              data={AppImages}
              renderItem={({ item }) => (
                <View style={{ padding: 16, alignItems: 'center' }}>
                  <Image style={{ width: 90, height: 90, borderRadius: 15, }} source={{ uri: item.image }} />
                  <Text style={{ fontSize: 16, color: 'white' }}>{item.title}</Text>
                </View>
              )}
              keyExtractor={item => item.id}
              numColumns={3}
            />
          </View>
          {/* <View style={{  }}>
            <FlatList
              data={AppImages}
              renderItem={({ item }) => (
                <View style={{ padding: 16, alignItems: 'center' }}>
                  <Image style={{ width: 60, height: 45, borderRadius: 15, }} source={{ uri: item.image }} />
                  <Text style={{ fontSize: 16 }}>{item.title}</Text>
                </View>
              )}
              keyExtractor={item => item.id}
              numColumns={4} 
            />
          </View>
          <View style={{  }}>
            <FlatList
              data={AppImages}
              renderItem={({ item }) => (
                <View style={{ padding: 16, alignItems: 'center' }}>
                  <Image style={{ width: 60, height: 45, borderRadius: 15, }} source={{ uri: item.image }} />
                  <Text style={{ fontSize: 16 }}>{item.title}</Text>
                </View>
              )}
              keyExtractor={item => item.id}
              numColumns={4} 
            />
          </View>
           */}
        </Swiper>
      </ImageBackground>
    </View>
  );
};

export default App;