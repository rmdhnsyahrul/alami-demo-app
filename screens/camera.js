import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
	const [camera, setCamera] = useState(null);
	const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

	const takePicture =  async() => {
		if(camera){
			const picture = await camera.takePictureAsync(null);
			setImage(picture.uri)
			// console.log(data.uri)
		}
	}

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
			<View style={{flex:1}}>
				<Camera
					ref={ref => setCamera(ref)}
					ratio="1:1"
					style={styles.camera}
					type={Camera.Constants.Type.front} />
			</View>

			<View style={styles.bottom}>
				<TouchableOpacity style={styles.cameraButtonContainer} onPress={() => takePicture()}>
					<MaterialCommunityIcons name='camera' size={24} color='white' style={styles.cameraButton}/>
				</TouchableOpacity>
			</View>
			
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		height: Dimensions.get("window").height
  },
	bottom: {
    flex: 1,
    alignItems: 'center'
  },
	cameraButtonContainer: {
		width: 60,  
		height: 60,   
		borderRadius: 30,            
		backgroundColor: '#0080ff',                                    
		position: 'absolute',
		bottom:30,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
  camera: {
    flex: 1,
		aspectRatio: 1
  },
  buttonContainer: {
    flex: 1,
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
});