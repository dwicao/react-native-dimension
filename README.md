# react-native-dimension

# Introduction
As a web developer we tend to use like `width: 50%` or `height: 70%`  
With this package you are able to give style your React Native Component easily  
by just `width: width(50)` or `height: height(70)`

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
import { width, height } from 'react-native-dimension';

class MyExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text>Yeah... This is awesome!</Text>
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
    height: height(70),
    width: width(80),
    backgroundColor: 'yellow',
  },
});

export default MyExample;
```

# License
MIT