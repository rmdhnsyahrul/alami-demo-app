import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/appStack'

const loadFonts = () => Font.loadAsync({
  'opensans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  'opensans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  'opensans-italic': require('./assets/fonts/OpenSans-Italic.ttf')
})

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded) {
    return (
      <Navigator />
    )
  } else {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    )
  }
}