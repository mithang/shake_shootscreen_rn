/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  NativeModules,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import RNShake from 'react-native-shake-viewshot/lib';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  React.useEffect(() => {
    const subscription = RNShake.addListener(data => {
      //Sau khi shake se tra ve hinh anh chup
      console.log('uri', data);
    });
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <Text>Shake Device to get Image</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
    backgroundColor: 'red',
  },
  tinyLogo: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
