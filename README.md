# react-native-dimension
Although this package is designed for React Native, it also works on Expo.

# Introduction
As a web developer we tend to use like `width: 50%` or `height: 70%`  
With this package you are able to give style your React Native Component easily  
By just `{ width: width(50) }` or `{ height: height(70) }`  
Or you could give a size of your font to be a total of screen size  
Like `{ fontSize: totalSize(2) }` (this means the font size will be 2% of your total size of the screen)   
See example usage below for more details

# Installation
* `npm install --save react-native-dimension`

# Usage
```jsx
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

class MyExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={styles.myText}>Yeah... This is awesome!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  textWrapper: {
    height: height(70), // 70% of height device screen
    width: width(80), // 80% of width device screen
    backgroundColor: 'yellow',
  },
  myText: {
    fontSize: totalSize(2) // 2% of total screen size
  }
});

export default MyExample;
```

# License
MIT