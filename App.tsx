/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import Mapbox from '@rnmapbox/maps';

// Temporarily use the token directly
const MAPBOX_TOKEN = 'pk.eyJ1IjoicmVhbGVzdGF0ZWJvdCIsImEiOiJjbHpza2V2d2MxbG92MmlzM2pvNmFobGRwIn0.9XtIh-QgEJ0AMXhzTFawew';

Mapbox.setAccessToken(MAPBOX_TOKEN);

function App(): React.JSX.Element {
  useEffect(() => {
    // Debug Mapbox initialization
    console.log('Mapbox initialized:', Mapbox);
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <Text>Map should appear below:</Text>
        <Mapbox.MapView 
          style={styles.map}
          initialState={{
            zoom: 14,
            center: [-74.006, 40.7128],
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
    width: '100%',
  }
});

export default App;
