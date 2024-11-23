// import React from 'react';
// import { SafeAreaView, FlatList, View, Text, } from 'react-native';

// const App = () => {
//   const languages = ['Telugu', 'Hindi', 'English', 'Malayalam', 'Kannada', 'Tamil'];

 
//   // Render each language item
//   const renderItem = () => {
   

//   return (
//     <SafeAreaView >
       
//         <View  style={{ flex: 1, flexDirection:'row', backgroundColor:'red'}}>
//       <FlatList
//         data={languages}
//         renderItem={renderItem}
//         keyExtractor={(item) => item}
//         ListHeaderComponent={renderHeader} 
//         contentContainerStyle={{padding:20}}
//       />
//       </View>
//     </SafeAreaView>
//   );
// }
// };

// export default App;
import React from 'react';
import { SafeAreaView, FlatList, View, Text, StyleSheet } from 'react-native';

const App = () => {
  const languages = ['Telugu', 'Hindi', 'English', 'Malayalam', 'Kannada', 'Tamil'];

  // ListHeaderComponent: This will stay at the top and not scroll
  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Select Language</Text>
    </View>
  );

  // Render each language item
  const renderItem = ({ item }) => (
    <View style={styles.languageBox}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={languages}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        ListHeaderComponent={renderHeader} // Add the header here
        contentContainerStyle={styles.languagesContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  languagesContainer: {
    padding: 25,
  },
  languageBox: {
    borderRadius: 15,
    marginBottom: 10,
    width: 80,
    alignItems: 'center',
    padding: 5,
    height: 35,
    borderWidth: 1,
  },
});

export default App;

