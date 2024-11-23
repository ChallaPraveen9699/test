import React, { useState } from 'react';
import { View, Alert, PermissionsAndroid, Platform, Image, TouchableOpacity, Text } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const requestCameraPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app needs access to your camera to take photos.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );

      console.log('Camera permission status:', granted);

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        Alert.alert(
          'Permission Required',
          'Camera permission has been permanently denied. Please go to settings to enable it.',
          [
            {
              text: 'Open Settings',
              onPress: () => {
                Linking.openSettings();
              },
            },
            {
              text: 'Cancel',
              style: 'cancel',
            },
          ],
          { cancelable: false }
        );
        return false;
      } else {
        Alert.alert('Permission Denied', 'Camera permission is required to use this feature.');
        return false;
      }
    } catch (err) {
      console.warn('Error requesting camera permission:', err);
      return false;
    }
  } else {
    return true; // Automatically granted on iOS
  }
};

const App = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openCamera = async () => {
    const hasPermission = await requestCameraPermission();
    if (hasPermission) {
      const options = {
        mediaType: 'photo',
        saveToPhotos: true,
        cameraType: 'back',
      };

      launchCamera(options, (response) => {
        if (response.didCancel) {
          console.log('User cancelled camera picker');
        } else if (response.errorCode) {
          console.error('Camera error:', response.errorMessage);
          Alert.alert('Camera Error', response.errorMessage);
        } else {
          console.log('Image captured:', response.assets[0].uri);
          setSelectedImage(response.assets[0].uri);
          Alert.alert('Image Captured', `File path: ${response.assets[0].uri}`);
        }
      });
    }
  };

  const openGallery = () => {
    const options = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.error('Gallery error:', response.errorMessage);
        Alert.alert('Gallery Error', response.errorMessage);
      } else {
        console.log('Image selected:', response.assets[0].uri);
        setSelectedImage(response.assets[0].uri);
        Alert.alert('Image Selected', `File path: ${response.assets[0].uri}`);
      }
    });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', }}>
      <TouchableOpacity onPress={openCamera} style={{ margin: 20 }}>
        <Icon name="camera-alt" size={50} color="#000" />
        <Text>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openGallery} style={{ margin: 20 }}>
        <Icon name="photo-library" size={50} color="#000" />
        <Text>Gallery</Text>
      </TouchableOpacity>
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={{ width: 200, height: 200, marginTop: 20 }}
        />
      )}

      <View>
        <TouchableOpacity onPress={()=>navigation.navigate ('newcart')}>
          <Text style={{fontSize:15,padding:15}}>
            clckme
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
};

export default App;
