// import React, { useState } from 'react';
// import { SafeAreaView, View, TouchableOpacity, Modal,Text } from 'react-native';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import { Calendar } from 'react-native-calendars';  // Import Calendar from react-native-calendars

// const AppCal = () => {
//   const [showModal, setShowModal] = useState(false);
//   return (
//     <SafeAreaView>
//       {/* First Calendar */}
//   <View style={{padding:20,marginLeft:50

//   }}>
//       <View style={{}}>
//         <View style={{ width: '80%', height: 60, borderWidth: 1 }} >
//           <TouchableOpacity onPress={() => setShowModal(true)} style={{ alignSelf: 'flex-end' }}>
//             <EvilIcons name='calendar' size={50} color="red" />
//           </TouchableOpacity>
//           <Calendar
//       current={'2024-10-18'}
//       onDayPress={(day) => {
//         console.log('selected day', day);
//       }}
//       markedDates={{
//         '2024-10-18': { selected: true, marked: true, selectedColor: 'blue' },
//       }}
//     />
//         </View>
//       </View>

//       {/* Second Calendar */}
//       <View style={{ padding: 20 ,marginTop:300}}>
//         <View style={{ width: '80%', height: 60, borderWidth: 1 }}>
//           <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
//             <EvilIcons name='calendar' size={50} color="red" />
//           </TouchableOpacity>
//            <Calendar
//                 current={'2024-10-18'}
//                 onDayPress={(day) => {
//                     console.log('selected day', day);
//                 }}
//                 markedDates={{
//                     '2024-10-18': { selected: true, marked: true, selectedColor: 'blue' },
//                 }}
//                 />
//         </View>
//       </View>
//   </View>
//     </SafeAreaView>
//   );
// };

// export default AppCal;

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import { SafeAreaView } from 'react-native-safe-area-context';


const App = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [valid, setValid] = useState(true);
  const [showPicker, setShowPicker] = useState(false);

  const handleChangeRaw = (value) => {
    if (value) {
      const isValidDate = moment(value, "MM/DD/YYYY", true).isValid();
      if (isValidDate) {
        setValid(true);
        setStartDate(moment(value, "MM/DD/YYYY").toDate());  // Set the date correctly
      } else {
        setValid(false);
        setStartDate(null);  // Invalid date
      }
    } else {
      setValid(false);
      setStartDate(null);  // If the input is empty or undefined
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowPicker(false);
    if (selectedDate) {
      setStartDate(currentDate);
      setValid(true);
    }
  };

  return (
<View style={{padding:10,alignItems:'center',justifyContent:'space-between',}}>
  <View style={styles.container[{padding:10}]}>
  <View style={{flexDirection:'row',borderWidth:1,padding:10}}>
    <View>
      <TextInput
        style={[styles.input, !valid ? styles.invalid : null]}
        value={startDate ? moment(startDate).format("DD/MM/YYYY") : ''}
        onChangeText={handleChangeRaw}
        placeholder="from Date"
        />
    </View>
      {!valid && <Text style={styles.errorText}>Invalid date format</Text>}
      <View>
        <TouchableOpacity onPress={() => setShowPicker(true)} style={{alignSelf:'flex-end'}}>
          <EvilIcons name='calendar' size={50} style={{padding:10,}} />
        </TouchableOpacity>
      </View>
  </View>
      {showPicker && (
        <DateTimePicker
          value={startDate || new Date()}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}

    </View>
    {/* //2nd calender */}
  <View style={{marginTop:30}}>
  <View style={styles.container}>
  <View style={{flexDirection:'row',borderWidth:1,padding:10}}>
    <View>
      <TextInput
        style={[styles.input, !valid ? styles.invalid : null]}
        value={startDate ? moment(startDate).format("DD/MM/YYYY") : ''}
        onChangeText={handleChangeRaw}
        placeholder="Todate"
        />
    </View>
      {!valid && <Text style={styles.errorText}>Invalid date format</Text>}
      <View>
        <TouchableOpacity onPress={() => setShowPicker(true)} style={{alignSelf:'flex-end'}}>
          <EvilIcons name='calendar' size={50} style={{padding:10,}} />
        </TouchableOpacity>
      </View>
  </View>
      {showPicker && (
        <DateTimePicker
          value={startDate || new Date()}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}

    </View>
  </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 5,
    width:90,
    fontSize:10
  },
  invalid: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default App;
